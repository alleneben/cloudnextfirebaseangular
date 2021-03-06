import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBxKCRRJ4bq-HU8-e6bZUqticvFSu5e3-Q",
  authDomain: "cssfirebase.firebaseapp.com",
  databaseURL: "https://cssfirebase.firebaseio.com",
  projectId: "cssfirebase",
  storageBucket: "cssfirebase.appspot.com",
  messagingSenderId: "220671154675"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
