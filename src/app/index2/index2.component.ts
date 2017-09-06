import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  val1={
      data:[],
      typeOfChart:''
  };
  constructor() { 
    this.val1.data= [['IOS',        30, 'red'],
      ['Android',     10, 'blue'],
      ['Blackberry',  20, 'green'],
      ['Symbian',     15, 'black'],
      ['Others',      25, 'grey'],{
        name: 'Proprietary or Undetectable',
        y: 0.2,
        dataLabels: {
            enabled: false
        }
      }];
    this.val1.typeOfChart='pie';
  }

  ngOnInit() {
  }

}

