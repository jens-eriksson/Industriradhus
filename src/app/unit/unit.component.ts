import { Component, OnInit } from '@angular/core';
import { IUnit } from '../../model/unit';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unit: IUnit;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    console.log(id);

  }

}
