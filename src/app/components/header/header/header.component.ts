import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControllerAppService } from 'src/app/services/controller-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = '';
  subscription: Subscription = new Subscription;
  searchForm = new FormGroup({
    searchText: new FormControl('',[Validators.required]),
  })

  constructor(public controllerService: ControllerAppService, private location:Location,
    private router:Router) {
  }

  ngOnInit(): void {
    this.subscription.add(this.controllerService.getHeaderTitle().subscribe(title => {  this.title = title.title; }));
  }
  search(): void{
    if(this.searchForm.valid){
     this.controllerService.fetchListByGeneralSearch(this.searchForm.controls['searchText'].value);
    this.router.navigate(['shows/listofshows/'+this.searchForm.controls['searchText'].value]);
    }
  }

  back(){
    this.location.back();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
