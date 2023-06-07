// @ts-ignore

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {fadeIn, fadeInEx, fadeInframe, fadeInmini} from "./animated.module";
import {delay} from "rxjs";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations:[
    // fadeIn,
    // fadeInmini,
    // fadeInEx,
    fadeInframe
    // fadeOut,
  ]
})

export class TestComponent {
  title = 'hello-world';
  color = 'text-white'
  idwidth:string = 'inherit';
  id: number = 0;
  username: string = '';
  password: string = '';

  state:string = 'standby';
  animationState:'running'|'rest' = 'rest';
  animationMeta = {fadeInframeDuration:1100};
  log($event: Event) {
    console.log("what");
  }

  constructor(private http: HttpClient) {
  }

  handleRequest(method: string) {
    let protocalParams = {'id': this.id, 'username': this.username, 'password': this.password};
    let protocalUrl: string = '';
    for (let key in protocalParams) {
      // @ts-ignore
      protocalUrl += `${key}=${protocalParams[key]}&`;
      console.log(protocalUrl);
    }
    if (method === 'GET') {
      this.http.get('http://localhost:8080/' + '?' + protocalUrl).subscribe(response => {
        // Handle the response from the GET request
        console.log(response);
      });
    } else if (method === 'POST') {
      // const body = {username:this.username, password:this.password};
      this.http.post('http://localhost:8080/', protocalUrl).subscribe(response => {
        // Handle the response from the POST request
        console.log(response);
      });
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async onHover(){
    this.state = 'hover';
    console.log(this.state);
    console.log(this.animationState);
    await this.delay(0);
    this.state ='standby';
    console.log(this.state);
    this.animationState = 'rest';
    console.log(this.animationState);

  }
  hoverController(){
    if (this.animationState === 'rest'){
      this.animationState = 'running';
      this.onHover();
    }else{
      return;
    }
  }
  protected readonly document = document;
  protected readonly onmouseover = onmouseover;
  protected readonly event = event;
}
