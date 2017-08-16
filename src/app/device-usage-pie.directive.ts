import { Directive, ElementRef, Input } from '@angular/core';
declare var require:any;
const Highcharts = require('assets/js/highcharts.js');

@Directive({
  	selector: '[appDeviceUsagePie]'
})
export class DeviceUsagePieDirective {
  	constructor(public element: ElementRef) { }
  	@Input() types:any;
	ngOnInit(){
		
		Highcharts.chart(this.element.nativeElement, {
			chart: {
				type: this.types.typeOfChart,
				width: 200,
				height: 200,
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
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
			plotOptions: {
				pie: {
					dataLabels: {
						enabled: false
					}
				}
			},
			series: [{
				name: '',
				innerSize: '50%',
				data: this.types.data,
				color: ['#3498db', '#1abb9c', '#9b59b6', '#9cc2cb', '#e74c3c']
			}],
		});
			
	}
	
}
