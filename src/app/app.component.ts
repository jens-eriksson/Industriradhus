import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project/project.service';
import { UnitService } from './unit/unit.service';
import { IProject } from './project/project';
import { AppService } from './app.service';
import { KeyValuePair} from '../model/keyvaluepair';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService, UnitService]
})
export class AppComponent implements OnInit {
  public projects: IProject[];
  public selectedProject: IProject;
  
  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this._appService.getProjects()
          .subscribe(projects => {
              this.projects = projects;
            });
  }

  getProjectKeyVaulePairs(): KeyValuePair[] {

    const keyValuePairs: KeyValuePair[] = [];

    for (let project of this.projects) {
      keyValuePairs.push(new KeyValuePair(project.id, project.name));
    }

    return keyValuePairs;
  }

}
