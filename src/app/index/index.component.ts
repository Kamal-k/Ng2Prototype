import { Component, OnInit } from '@angular/core';
import { WorldmapService } from '../worldmap.service';
import { WeatherService } from '../weather.service';
import { BargraphService } from '../bargraph.service';

declare var $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [WorldmapService, WeatherService, BargraphService]
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
  };
  mapOptions:any;
  weatherOptions:any
  todayWeatherOptions = {
    location: '',
    temp_c: '',
    temp_f: '',
    day: '',
    time: '',
    icon: '',
    weather: ''
  }
  weatherForecastOptions:any
  forecastOptions = []
  appVersions:any
    
  constructor(private worldmapSvc:WorldmapService, private weatherSvc:WeatherService, private bargraphSvc:BargraphService) {
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
    this.getMap();
    this.getWeather();
    this.getWeatherForecast();
    this.getBargraph();
  }
  
  // Visitors Location world map
  getMap() {
    this.worldmapSvc.getMap()
    .subscribe(res=>{
      this.mapOptions=res.mapCountries;
    })
  }

  // Daily active users weather
  getWeather() {
    this.weatherSvc.getWeather()
    .subscribe(res=>{
      this.weatherOptions=res;
      this.todayWeatherOptions.location = this.weatherOptions.current_observation.display_location.city;
      this.todayWeatherOptions.temp_c = this.weatherOptions.current_observation.temp_c;
      this.todayWeatherOptions.temp_f = this.weatherOptions.current_observation.temp_f;
      // this.todayWeatherOptions.icon = this.weatherOptions.current_observation.icon_url;

      this.todayWeatherOptions.icon = "../../assets/images/weather-icons/"+this.weatherOptions.current_observation.icon+".svg";
      this.todayWeatherOptions.weather = this.weatherOptions.current_observation.weather;
    })
  }

  getWeatherForecast() {
    this.weatherSvc.getWeatherForecast()
    .subscribe(res=>{
      this.weatherForecastOptions=res.forecast.simpleforecast.forecastday;
      for(let i=1; i< 7; i++){
        this.forecastOptions.push({
          "temp_c":this.weatherForecastOptions[i].high.celsius,
          "temp_f":this.weatherForecastOptions[i].high.fahrenheit,
          "day":this.weatherForecastOptions[i].date.weekday_short,
          // "icon":this.weatherForecastOptions[i].icon_url,

          "icon":"../../assets/images/weather-icons/"+this.weatherForecastOptions[i].icon+".svg",

          "wind":this.weatherForecastOptions[i].maxwind.kph
        })
      }
    })
  }

  toggleDegree(e) {
    var todayDegree = document.getElementById('todayDegree');
    var forecastDegree = document.getElementsByClassName('forecastDegree');
    if(e == 'F') {
      todayDegree.innerHTML = this.todayWeatherOptions.temp_f;
      for(let i=0; i< 6; i++){
        forecastDegree[i].innerHTML = this.forecastOptions[i].temp_f;
      }
    }
    else if(e == 'C') {
      todayDegree.innerHTML = this.todayWeatherOptions.temp_c;
      for(let i=0; i< 6; i++){
        forecastDegree[i].innerHTML = this.forecastOptions[i].temp_c;
      }
    }
  }

  // App Version Horizontal Bar Graph
  getBargraph() {
    this.bargraphSvc.getBargraph()
    .subscribe(res=>{
      this.appVersions=res.appVersions;
    })
  }

  ngOnInit() {
      let progressBar = document.getElementsByClassName('progress-bar');
      for(var i = 0; i < progressBar.length; i++) {
        progressBar[i].classList.add("bg-green");
      }
      let staticProgressBar = document.getElementsByClassName('progress_static .progress-bar');
      for(var i = 0; i < staticProgressBar.length; i++) {
      }

      var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var date = new Date();
      this.todayWeatherOptions.day = daysOfWeek[date.getDay()];
      var time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
      this.todayWeatherOptions.time = time;

      // var degree = document.getElementById('temperature').children;
      // degree[0].addEventListener('click', function () {
      //   console.log(this.innerHTML);
      // });

  }

}
