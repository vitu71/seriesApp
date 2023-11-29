import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/Movie.interface';
import { ControllerAppService } from 'src/app/services/controller-app.service';
import { Subscription } from 'rxjs';
import { generateFakeCardFunction } from 'src/app/helper/fake-bucle';
@Component({
  selector: 'app-movie-details-view',
  templateUrl: './movie-details-view.component.html',
  styleUrls: ['./movie-details-view.component.scss']
})
export class MovieDetailsViewComponent implements OnInit, OnDestroy {
  id!: number;
  show!: Movie;
  showModal: boolean = false;
  subscription: Subscription = new Subscription;
  modalTitle: string = '';
  modalText: string = '';
  showButtons: boolean = false;
  showSpinner: boolean = false;
  generateFakeCard = generateFakeCardFunction;
  language: string = 'es';
  constructor(public controllerService: ControllerAppService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.subscription.add(this.controllerService._showDetail$.subscribe(movie => {
      if (movie) {
        this.show=movie;
        this.setTitleOfMovie();
      }
    }));
    this.controllerService.fetchShowDetail(this.id);
  }
  setTitleOfMovie() {
    this.controllerService.setTitle(this.show.name);
  }
  getPoster(poster?: string) {
    if (poster) {
      return poster;
    } else {
      return 'assets/images/no-image.png';
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
