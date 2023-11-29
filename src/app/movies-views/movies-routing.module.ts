import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsViewComponent } from './movie-details-view/movie-details-view.component';


import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { ShowsListViewComponent } from './movies-list-view/shows-list-view.component';

const routes: Routes = [
  {path:'listofshows/:id',component:ShowsListViewComponent,pathMatch:'full'},
  {path:'showdetails/:id',component:MovieDetailsViewComponent,pathMatch:'full'},
  {path: '**', component: MovieListComponent },
];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule { }
