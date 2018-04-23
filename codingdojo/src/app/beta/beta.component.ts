import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
Idee: Number;
editThisPet = [];
edit = "213";

constructor(
  	private _httpService: HttpService,
  	private _route: ActivatedRoute,
    private _router: Router) { }





getPets(){
	let observable = this._httpService.findPet(this.Idee)
  	observable.subscribe( data => {
  	this.editThisPet = data['data'][0];
  	this.edit = "abc"
  	console.log(this.editThisPet)	
  
  })
}
  




ngOnInit() {
  	this._route.params.subscribe((params: Params) => 
  		this.Idee = params['id']);
  	this.getPets()
  	console.log(this.edit)
  	console.log("editing this pet", this.editThisPet)
  }




onSubmitEdit(idee){
  	console.log('edit Submitted')
    let observable = this._httpService.updatePet(this.editThisPet, idee)
      observable.subscribe( data =>{
        console.log("pet updated", data)
        this._router.navigate(['/']);
      })
  }
}
