import { IUnit } from './unit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private _unitsUrl = '../../data/units.json';
  constructor(private _httpClient: HttpClient) { }

  getUnits(projectId: string): Observable<IUnit[]> {
    return this._httpClient.get<IUnit[]>(this._unitsUrl);
  }

  getUnit(id: string): Observable<IUnit> {
    return this._httpClient.get<IUnit>(this._unitsUrl)[0];
  }

}
