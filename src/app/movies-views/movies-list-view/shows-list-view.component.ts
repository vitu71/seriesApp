import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControllerAppService } from 'src/app/services/controller-app.service';

@Component({
  selector: 'app-shows-list-view',
  templateUrl: './shows-list-view.component.html',
  styleUrls: ['./shows-list-view.component.scss']
})
export class ShowsListViewComponent implements OnInit {

  constructor(public controllerService: ControllerAppService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const genre = this.activatedRoute.snapshot.params['id'];
    this.controllerService.setTitle('List of '+genre+' shows');
  }

}
