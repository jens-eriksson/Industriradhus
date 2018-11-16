import { ProjectProvider } from './../../providers/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UnitProvider } from '../../providers/unit';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.html',
  styleUrls: ['./unit.css']
})
export class UnitPage implements OnInit {
  project;
  unit;

  constructor(
    private route: ActivatedRoute,
    private unitProvider: UnitProvider,
    private projectProvider: ProjectProvider
  ) {
    let unitId = this.route.snapshot.paramMap.get("id");
    this.unitProvider.getUnit(unitId).subscribe(unit => {
      this.unit = unit;
      this.projectProvider.getProject(unit.projectKey).subscribe(project => {
        this.project = project;
      })
    });
  }

  ngOnInit() {  }

}
