import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

pets: any;
editThisPet = [];

  constructor(
	private _httpService: HttpService,
	private _route: ActivatedRoute,
	private _router: Router
	){
  }

ngOnInit(){
  this.getPets();
  }

getPets(){
	let observable = this._httpService.getPet()
  	observable.subscribe( 
  	data => {
  	this.pets = data['data'];
  	console.log(this.pets)
  })
}




editButtonClicked(){
	console.log("Editing")
}








}
