import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() show!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  checkPoster(poster: string) : string {
   return poster? poster: 'assets/images/no-image.png';
  }
  redirectToDetail(id: number) {
    this.router.navigate(['shows/showdetails', id])
  }
}
