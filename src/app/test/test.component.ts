// @ts-ignore

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'hello-world';
  id:number = 0;
  username: string = '';
  password: string = '';

  log($event: Event) {
    console.log("what");
  }

  constructor(private http: HttpClient) {
  }

  handleRequest(method: string) {
    let protocalParams = {'id':this.id,'username':this.username,'password':this.password};
    let protocalUrl:string = '';
    for (let key in protocalParams) {
        // @ts-ignore
      protocalUrl += `${key}=${protocalParams[key]}&`;
        console.log(protocalUrl);
    }
    if (method === 'GET') {
      this.http.get('http://localhost:8080/' +'?'+protocalUrl).subscribe(response => {
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
}
