import { Directive, ElementRef, Input } from '@angular/core';
declare var require:any;
const Highcharts = require('assets/js/highcharts.js');

@Directive({
  selector: '[appBargraph]'
})
export class BargraphDirective {

  constructor(public element:ElementRef) { }

  @Input() types:any;

  ngOnInit(){
    Highcharts.chart(this.element.nativeElement, {
      chart: {
          type: this.types.typeOfChart,
          height: 300
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        title: {
          text: ''
        },
        categories: this.types.xAxis
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },

      series: [
        {
          data: this.types.data1,
          marker: {
            enabled: false,
          },
          color: '#1abb9c'
        },
        {
          data: this.types.data2,
          marker: {
            enabled: false,
          },
          color: '#9abcc3'
        }
      ]
    });
  }
}


