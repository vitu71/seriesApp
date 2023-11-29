import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsViewComponent } from './movie-details-view/movie-details-view.component';
import { ConvertMinutes } from '../pipes/convertMinutes';
import { ComponentsModule } from '../components/components.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MoviesRoutingModule } from './movies-routing.module';
import { ShowsListViewComponent } from './movies-list-view/shows-list-view.component';


@NgModule({
  declarations: [
    MovieDetailsViewComponent,
    ConvertMinutes,
    ShowsListViewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MoviesRoutingModule,
    NgxSkeletonLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [
    MovieDetailsViewComponent, ShowsListViewComponent]
})
export class MoviesModule { }
