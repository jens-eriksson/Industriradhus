import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnit } from '../../model/unit';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private _path = 'unit/';

  constructor(private _httpClient: HttpClient) { }

  getUnits(): Observable<IUnit[]> {
    return this._httpClient.get<IUnit[]>(environment.apiBaseUrl + this._path);
  }

  getUnit(id: string): Observable<IUnit> {
    return this._httpClient.get<IUnit>(environment.apiBaseUrl + this._path + id);
  }
}
