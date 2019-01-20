import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class FloorplanProvider {
    private _path = 'floorplans/';

    constructor(private _httpClient: HttpClient) { }
  
    getFloorplans(): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path);
    }
  
    getFloorplan(key: string): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path + key);
    }
}