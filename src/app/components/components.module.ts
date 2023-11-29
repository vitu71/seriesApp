import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HeaderComponent } from './header/header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [MovieCardComponent,HeaderComponent,MovieListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule
  ],
  exports: [MovieCardComponent,HeaderComponent,MovieListComponent]
})
export class ComponentsModule { }
