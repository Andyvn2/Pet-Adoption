import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) {}
  



  getPet(){
  	console.log("getting pets")
  	return this._http.get('/petsfind')
  }




  addPet(newpet){
  	console.log("da new pet", newpet)
  	return this._http.post('/pets', newpet)
  }


  findPet(petID){
  	console.log(petID)
  	return this._http.get('/pets/' + petID)
  }

  updatePet(Pet, idee){
    return this._http.put('/pets/'+idee, Pet)
  }
}
