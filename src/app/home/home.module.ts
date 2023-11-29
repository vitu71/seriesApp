import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MoviesModule } from '../movies-views/movies.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    MoviesModule
  ]
})
export class HomeModule { }
