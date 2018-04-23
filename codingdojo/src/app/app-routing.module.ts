import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  { path: '', component: DetailsComponent},
  { path: 'new',component: AlphaComponent },
  { path: 'edit/:id',component: BetaComponent },
  { path: 'details/:id',component: GammaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/'}

  // use a colon and parameter name to include a parameter in the url
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }