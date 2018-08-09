import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*

var config = {
    apiKey: "AIzaSyDtcItS3AI8bwpmRb8vUquIzFu5nv1ejQo",
    authDomain: "fitnessapp-50279.firebaseapp.com",
    databaseURL: "https://fitnessapp-50279.firebaseio.com",
    projectId: "fitnessapp-50279",
    storageBucket: "fitnessapp-50279.appspot.com",
    messagingSenderId: "41712166259"
  };

*/
