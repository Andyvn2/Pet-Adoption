import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
	newPet: any;
  constructor(
  				private _httpService: HttpService,
  			  	private _route: ActivatedRoute,
    			private _router: Router
    			) { }

  ngOnInit() {
  	this.newPet = { name: "New Name", type: "New Type", description: "New Desc", skill1: "", skill2: "", skill3: "" }
  }

  onSubmit(){
  	console.log("this is the new Pet", this.newPet)
	let Observable = this._httpService.addPet(this.newPet);
  	Observable.subscribe(data => {
      console.log ("Pet Sent!", data);
      this._router.navigate(['/']);

    })
  }
}

