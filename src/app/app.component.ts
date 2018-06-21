import { Component, OnInit } from '@angular/core';
import { IProject } from '../model/project';
import { AppService } from './app.service';
import { KeyValuePair} from '../model/keyvaluepair';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
  }

}
