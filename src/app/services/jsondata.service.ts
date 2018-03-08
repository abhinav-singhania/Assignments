import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class JsondataService {

  constructor(private http:HttpClient) { }
  private _url: string="/assets/data/data.json";
  getData(){
    return this.http.get(this._url);
  }

}