import { FloorplanProvider } from './../../providers/floorplan';
import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-floorplans',
  templateUrl: './floorplans.html',
  styleUrls: ['./floorplans.css']
})
export class FloorplansPage implements OnInit {
  floorplans;

  constructor(
    private floorplanProvider: FloorplanProvider
  ) { 
    this.floorplanProvider.getFloorplans().subscribe(floorplans => {
      this.floorplans = floorplans;
    })
  }

  ngOnInit() {
  }

}
