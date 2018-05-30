import { UnitListComponent } from './../unit/unit-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UnitService } from './../unit/unit.service';
import { ProjectService } from './project.service';
import { IProject } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: IProject[];
  project: IProject;

  constructor(private _projectService: ProjectService,
              private _unitService: UnitService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._projectService.getProjects()
          .subscribe(projects => {
              this.projects = projects;
              this.project = this.projects[0];
            });

  }
}
