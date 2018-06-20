import { Component, OnInit, Input } from '@angular/core';
import { KeyValuePair } from '../../model/keyvaluepair';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = 'industriradhus.se';
  @Input() projects: KeyValuePair[];

  constructor() { }

  ngOnInit() {
  }

}
