import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamcroComponent } from './samcro/samcro.component';
import { MayansComponent } from './mayans/mayans.component';
import { OneNinersComponent } from './one-niners/one-niners.component';
import { ABComponent } from './ab/ab.component';
import { GrimBastardsComponent } from './grim-bastards/grim-bastards.component';
import { ByzLatsComponent } from './byz-lats/byz-lats.component';
import { ChineseTriadsComponent } from './chinese-triads/chinese-triads.component';
import { JohnTellerComponent } from './john-teller/john-teller.component';
import { JaxTellerComponent } from './jax-teller/jax-teller.component';
import { ClayMorrowComponent } from './clay-morrow/clay-morrow.component';
import { FilipTrelfordComponent } from './filip-trelford/filip-trelford.component';

const routes: Routes = [
  {path: 'samcro', component: SamcroComponent},
  {path: 'mayans', component: MayansComponent},
  {path: 'oneNiners', component: OneNinersComponent},
  {path: 'AB', component: ABComponent},
  {path: 'grimBastards', component: GrimBastardsComponent},
  {path: 'byzLats', component: ByzLatsComponent},
  {path: 'triads', component: ChineseTriadsComponent},

  {path: 'john', component: JohnTellerComponent, outlet: 'members'},
  {path: 'jax', component: JaxTellerComponent, outlet: 'members'},
  {path: 'clay', component: ClayMorrowComponent, outlet: 'members'},
  {path: 'filip', component: FilipTrelfordComponent, outlet: 'members'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
