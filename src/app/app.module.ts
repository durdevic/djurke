import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { IdeasComponent } from './ideas/ideas.component';

import {routing} from './app.routing';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDlLG5IwKRID_yvJHIMCdB-zn5yujgEicw',
  authDomain: 'idea-75af2.firebaseapp.com',
  databaseURL: 'https://idea-75af2.firebaseio.com',
  storageBucket: 'idea-75af2.appspot.com'
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, NavbarComponent, InputBoxComponent, IdeasComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
