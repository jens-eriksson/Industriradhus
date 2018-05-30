import { Component, OnInit } from '@angular/core';
import { IUnit } from './unit';
import { ActivatedRoute} from '@angular/router';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unit: IUnit;

  constructor(private _route: ActivatedRoute, private _unitService: UnitService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    this._unitService.getUnits(id)
          .subscribe(unit => {
              this.unit = unit[0];
            });
  }

}
