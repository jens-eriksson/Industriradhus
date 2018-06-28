import { Component, OnInit, Input } from '@angular/core';
import { IUnit } from '../../model/unit';
import { IProject } from '../../model/project';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  @Input() project: IProject;

  constructor() { }

  ngOnInit() {

  }


}
