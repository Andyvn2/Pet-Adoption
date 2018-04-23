import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
	Idee : Number;
	detailPet: any;
  constructor(
  				private _httpService: HttpService,
  			  	private _route: ActivatedRoute,
    			private _router: Router
    			) { }



  getPets(){
	let observable = this._httpService.findPet(this.Idee)
  	observable.subscribe( data => {
  	this.detailPet = data['data'][0];
  	
  	console.log(this.detailPet)	
  
  })
}
  




ngOnInit() {
  	this._route.params.subscribe((params: Params) => 
  		this.Idee = params['id']);
  	this.getPets()
  }


}
