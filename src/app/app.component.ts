import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navClicked:boolean=true;
  test(data){
    this.navClicked = !(this.navClicked);
    console.log(data);}
    constructor() {
        const me = this;
    }
  }
