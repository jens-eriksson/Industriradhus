import { SalesAgentProvider } from './../../providers/sales-agent';
import { UnitProvider } from './../../providers/unit';
import { ProjectProvider } from './../../providers/project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-unit',
  templateUrl: './unit.html',
  styleUrls: ['./unit.css']
})
export class UnitPage implements OnInit {
  project;
  unit;
  salesAgent;
  
  constructor(
    private route: ActivatedRoute,
    private unitProvider: UnitProvider,
    private salesAgentProvider: SalesAgentProvider,
    private projectProvider: ProjectProvider
  ) {
    let unitId = this.route.snapshot.paramMap.get("id");
    this.unitProvider.getUnit(unitId).subscribe(unit => {
      this.unit = unit;
      this.projectProvider.getProject(unit.projectKey).subscribe(project => {
        this.project = project;
      });
      this.salesAgentProvider.getSalesAgent(unit.salesAgentKey).subscribe(salesAgent => {
        this.salesAgent = salesAgent;
      })
    });
  }

  ngOnInit() {  }
}
