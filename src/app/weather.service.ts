import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

  constructor(private http:Http) { }
  
    getWeather():Observable<any>{
      return this.http.get("http://api.wunderground.com/api/53e8536315b17168/i/conditions/q/India/New_Delhi.json")
      .map((res)=>res.json())
      .catch((err)=>err.json());
    }

    getWeatherForecast():Observable<any>{
      return this.http.get("http://api.wunderground.com/api/53e8536315b17168/i/forecast10day/q/India/New_Delhi.json")
      .map((res)=>res.json())
      .catch((err)=>err.json());
    }

}
