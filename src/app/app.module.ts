import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SamcroComponent } from './samcro/samcro.component';
import { MayansComponent } from './mayans/mayans.component';
import { OneNinersComponent } from './one-niners/one-niners.component';
import { ABComponent } from './ab/ab.component';
import { GrimBastardsComponent } from './grim-bastards/grim-bastards.component';
import { ByzLatsComponent } from './byz-lats/byz-lats.component';
import { ChineseTriadsComponent } from './chinese-triads/chinese-triads.component';

import { JaxTellerComponent } from './jax-teller/jax-teller.component';
import { JohnTellerComponent } from './john-teller/john-teller.component';
import { ClayMorrowComponent } from './clay-morrow/clay-morrow.component';
import { FilipTrelfordComponent } from './filip-trelford/filip-trelford.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SamcroComponent,
    MayansComponent,
    OneNinersComponent,
    ABComponent,
    GrimBastardsComponent,
    ByzLatsComponent,
    ChineseTriadsComponent,
    JaxTellerComponent,
    JohnTellerComponent,
    ClayMorrowComponent,
    FilipTrelfordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
