import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { generateFakeCardFunction } from 'src/app/helper/fake-bucle';
import { ControllerAppService } from 'src/app/services/controller-app.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements  OnDestroy {
  generateFakeCards= generateFakeCardFunction;
  subscription: Subscription = new Subscription;
  p: number = 1;
  constructor(public controllerService: ControllerAppService) { }

  trackMovies(_index: number, movie: any):number | undefined {
    return movie ? movie.id : undefined;
  }
  sortList(): void{ 
    this.subscription.add(this.controllerService.sortList().subscribe());
   }
   ngOnDestroy(): void {
     this.subscription.unsubscribe();
   }
  }
   
