import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDtcItS3AI8bwpmRb8vUquIzFu5nv1ejQo',
  authDomain: 'fitnessapp-50279.firebaseapp.com',
  databaseURL: 'https://fitnessapp-50279.firebaseio.com',
  projectId: 'fitnessapp-50279',
  storageBucket: 'fitnessapp-50279.appspot.com',
  messagingSenderId: '41712166259'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
