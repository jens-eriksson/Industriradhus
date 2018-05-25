import { Component, OnInit } from '@angular/core';
import { UnitService } from './../unit/unit.service';
import { ProjectService } from './project.service';
import { IProject } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: IProject;

  constructor(private _projectService: ProjectService, private _unitService: UnitService) {
  }

  ngOnInit() {
    this.project = this._projectService.getProjects()[0];
    this.project.units = this._unitService.getUnits(this.project.id);
  }
}
