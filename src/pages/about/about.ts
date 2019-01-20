import { SalesAgentProvider } from './../../providers/sales-agent';
import { Component, OnInit } from '@angular/core';
import { ProjectProvider } from '../../providers/project';

@Component({ 
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutPage implements OnInit {
  contact;
  projects;

  constructor(
    private salesAgentProvider: SalesAgentProvider,
    private projectProvider: ProjectProvider
  ) { 
    this.salesAgentProvider.getSalesAgent("jorgen").subscribe(salesAgent => {
      this.contact = salesAgent;
    });
    this.projectProvider.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

  ngOnInit() {
  }

}
