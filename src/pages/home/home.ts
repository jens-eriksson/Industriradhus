import { Component, OnInit } from '@angular/core';
import { ProjectProvider } from '../../providers/project';


@Component({ 
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage implements OnInit {  
  public projects;

  constructor(
    private projectProvider: ProjectProvider
  ) {
    this.projectProvider.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }
  
  ngOnInit() {
    
  }

}
