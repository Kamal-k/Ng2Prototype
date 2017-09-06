import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onActivate(component){
    //   $(".select").select2({
    //  minimumResultsForSearch: -1,
    // });
     $.getScript('../assets/js/custom.js');
      window.scrollTo(0,0);
  }


  title = 'app works!';
  navClicked:boolean=true;
  test(data){
    this.navClicked = !(this.navClicked);
    console.log(data);}
    constructor() {
        const me = this;
    }
  }
