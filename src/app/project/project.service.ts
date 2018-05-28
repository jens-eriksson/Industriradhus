import { Injectable } from '@angular/core';
import { IProject } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectUrl = '../../data/projects.json';

  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this._httpClient.get<IProject[]>(this._projectUrl);
  }
}
