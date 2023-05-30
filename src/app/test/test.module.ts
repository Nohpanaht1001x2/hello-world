import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";

// import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    // TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class TestModule { }
