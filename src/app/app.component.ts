import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fadeIn, fadeInframe, fadeOut} from "./test/animated.module";
import {state} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // fadeIn,
    // fadeInmini,
    // fadeInEx,
    fadeInframe
    // fadeOut,
  ]

})
export class AppComponent {
  title = 'hello-world';
  state: string = 'standby';
  animationState: 'running' | 'rest' = 'rest';
  animationMeta = {fadeInframeDuration: 1100};

  log($event: Event) {
    console.log("wow");
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onHover() {
    this.state = 'hover';
    console.log(this.state);
    console.log(this.animationState);
    await this.delay(1000);
    this.state = 'standby';
    console.log(this.state);
    this.animationState = 'rest';
    console.log(this.animationState);

  }

  hoverController() {
    if (this.animationState === 'rest') {
      this.animationState = 'running';
      this.onHover();
    } else {
      return;
    }
  }

  async aniLoopcontroller() {
    for (let a = 0;a<100;a++) {
      await this.delay(2000)
      this.hoverController();
      if (a===99){
        a=0;
      }
    }
  }

  constructor() {
    // this.aniLoopcontroller();
  }

  // protected readonly state = state;
}

declare type alduiashd = {
  id: string,
  name: string
}

class App {
  id?: string;
  name?: string
}



