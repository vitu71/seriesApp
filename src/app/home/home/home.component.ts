import { Component } from '@angular/core';
import { ControllerAppService } from 'src/app/services/controller-app.service';
import genres from '../../../assets/json/listOfGenresDefinitions.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  genres= genres;
  constructor(private controllerService: ControllerAppService,private router:Router) {
    this.controllerService.setTitle('Series App');
    this.controllerService.fetchListByGeneralSearch('a');
   }
   getImage(name: string): string{
    return '../../../assets/images/'+name+'.jpg'
  }
  getListByGender(genre:string){
    this.controllerService.fetchListByGender(genre);
    this.router.navigate(['shows/listofshows/'+genre]);
  }


}
