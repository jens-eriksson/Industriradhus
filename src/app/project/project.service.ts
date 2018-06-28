import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../../model/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _path = 'project/';

  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this._httpClient.get<IProject[]>(environment.apiBaseUrl + this._path);
  }

  getProject(id: string): Observable<IProject> {
    return this._httpClient.get<IProject>(environment.apiBaseUrl + this._path + id);
  }
}
