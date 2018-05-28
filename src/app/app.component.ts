import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project/project.service';
import { UnitService } from './unit/unit.service';
import { IProject } from './project/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService, UnitService]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
