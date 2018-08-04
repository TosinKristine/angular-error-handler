import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient){
  }
  NoInternet(){
    this.http.get("https://www.googleapis.com/youtube/v3/").subscribe();
  }
  NoPage(){
    this.http.get("https://www.googleapis.com/youtube/v3/").subscribe();
  }
  Error401(){
    this.http.get("https://www.googleapis.com/youtube/v3/").subscribe();
  }
  Error403(){
    this.http.get("https://www.googleapis.com/youtube/v3/").subscribe();
  }
  Error404(){
    this.http.get("https://www.googleapis.com/youtube/v3/").subscribe();
  }
  Error500(){
    this.http.get("https://xxxasdas").subscribe();
  }
}
