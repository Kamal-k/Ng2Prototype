import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BargraphService {

  constructor(private http:Http) { }

  getBargraph():Observable<any>{
    return this.http.get("api/graphs.json")
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }

}
