import { Directive, ElementRef, Input } from '@angular/core';
declare var require:any, chart:any;
const Highcharts = require('highcharts');

require('../../node_modules/highcharts/js/highcharts-more.js')(Highcharts);
require('../../node_modules/highcharts/modules/solid-gauge.js')(Highcharts);

@Directive({
  selector: '[appQuickSettingsGauge]'
})
export class QuickSettingsGaugeDirective {

  constructor(public element:ElementRef) { }
  @Input() types:any;

  ngOnInit(){
    Highcharts.theme = {colors: ['#66abab', '#a8e3d7', '#1abc9c', '#DDDF00', '#24CBE5', '#64E572']};
    Highcharts.setOptions(Highcharts.theme);

    Highcharts.chart(this.element.nativeElement, {
      chart: {
        height: 120
      },

      title: null,

      pane: {
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '85%'],
          size: 160,
          background: {
            backgroundColor: '#f00',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
      },

      tooltip: {
          enabled: false
      },

      yAxis: {
        //  stops: [
        //     [0.1, '#55BF3B'], // green
        //     [0.5, '#DDDF0D'], // yellow
        //     [0.9, '#DF5353'] // red
        // ],
        tickAmount: 0,  // For lines from min to max
        min: 0,
        max: 100,
        labels: {
            rotation: 'none',
            distance: 20
        },
        plotBands: [{
            from: 0,
            to: 55,
            color: '#F00',
            innerRadius: '60%',
            outerRadius: '100%'
        }]
      },

      plotOptions: {
        gauge: {
            dial: {
                radius: '100%'
            },
            color : '#f00'
        }
      },

      series: [{
          type: this.types.typeOfChart,
          data: [{y:55, color: '#f00'}],
          yAxis: 0,
          dial: {
              color : '#f00'
          }
      }]
    });
  }
}
