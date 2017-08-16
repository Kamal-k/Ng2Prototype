import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  val1={
      data1:[],
      data2:[],
      typeOfChart:'',
      xAxis: []
  };
  val2={
      data:[],
      typeOfChart:''
  };
  val3={
      data:[],
      typeOfChart:''
  }
    
  constructor() {
    this.val1.data1=[ 80, 65, 50, 45, 40, 25 ];
    this.val1.typeOfChart='areaspline';
    this.val1.data2=[ 5, 25, 50, 80, 90, 100 ];
    this.val1.xAxis=[ 'Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'];
    this.val2.data= [['IOS',        30, 'red'],
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
    this.val2.typeOfChart='pie';
    this.val3.data= [55];
    this.val3.typeOfChart='gauge';
   }

  ngOnInit() {
      let progressBar = document.getElementsByClassName('progress-bar');
      for(var i = 0; i < progressBar.length; i++) {
        progressBar[i].classList.add("bg-green");
      }
      let staticProgressBar = document.getElementsByClassName('progress_static .progress-bar');
      for(var i = 0; i < staticProgressBar.length; i++) {
        console.log(staticProgressBar[i]);
        // progressBar[i].classList.add("bg-green");
        // staticProgressBar.transition = 'none';
      }
  }

}
