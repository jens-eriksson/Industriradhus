import { Injectable } from '@angular/core';
import { IProject } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): IProject[] {
    return [
      {
        'id': 'hedensbyn',
        'name': 'Hedensbyns Företagspark',
        'description': '',
        'units': null
      }
    ];
  }
}
