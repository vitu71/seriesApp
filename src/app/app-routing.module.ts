import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {
    path: 'shows',
    loadChildren: () => import('./movies-views/movies.module').then(m => m.MoviesModule)
  },
  {path:'**',component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
