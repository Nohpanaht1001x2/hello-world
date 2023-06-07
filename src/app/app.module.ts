import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

// @ts-ignore
import { TestComponent } from './test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { fadeIn } from "./test/animated.module";

const routes:Routes = [
  {path:"test",component:TestComponent},
  {path:"welcome",component: WelcomeComponent}
]

// @ts-ignore
@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

