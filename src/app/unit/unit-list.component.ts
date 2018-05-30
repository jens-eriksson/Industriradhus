import { UnitService } from './unit.service';
import { Component, OnInit, Input } from '@angular/core';
import { IUnit } from './unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  @Input() projectId: string;
  units: IUnit[];

  constructor(private _unitService: UnitService) { }

  ngOnInit() {
    this._unitService.getUnits(this.projectId)
            .subscribe(units => {
              this.units = units;
            });
  }


}
