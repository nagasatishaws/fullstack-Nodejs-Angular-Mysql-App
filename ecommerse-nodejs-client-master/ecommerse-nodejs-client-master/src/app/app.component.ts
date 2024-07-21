import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(){
    const serverURL = 'http://api-ecom.myarts.live/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
