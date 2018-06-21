import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../../model/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this._httpClient.get<IProject[]>(environment.apiUrl);
  }
}
