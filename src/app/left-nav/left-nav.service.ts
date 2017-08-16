import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//import 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class LeftNavService {

  constructor(private http:Http) { }

  getMenus():Observable<any>{
    return this.http.get("api/menus.json")
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }
}
