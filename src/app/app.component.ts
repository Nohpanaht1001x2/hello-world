import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  log($event : Event){
    console.log("wow");
  }


}
declare type alduiashd = {id: string,
  name: string}
class App {id?: string;name?: string}
