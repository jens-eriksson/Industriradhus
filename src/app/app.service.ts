import { Injectable } from '@angular/core';
import { IProject } from './project/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this._httpClient.get<IProject[]>(environment.apiUrl + 'projects');
  }
}
