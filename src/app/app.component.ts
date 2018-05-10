import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cooking app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAnagKSvRn2Hr9LQZReptYCZ_a1M8bMJog",
      authDomain: "angrecipebook.firebaseapp.com",
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
