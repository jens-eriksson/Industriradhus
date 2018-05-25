import { IUnit } from './unit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

  getUnits(projectId: string): IUnit[] {
    return [{
        'id': 'hedensbyn-1',
        'projectId': 'hedensbyn',
        'name': 'Enhet 1 - Lagerlokal',
        'price': 2550000,
        'rent': 8000,
        'picture': 'lagerenhet.png',
        'size': 192,
        'sold': false
      },
      {
        'id': 'hedensbyn-2',
        'projectId': 'hedensbyn',
        'name': 'Enhet 2 - Lagerlokal',
        'price': 2550000,
        'rent': 8000,
        'picture': 'lagerenhet.png',
        'size': 192,
        'sold': true
      },
      {
        'id': 'hedensbyn-3',
        'projectId': 'hedensbyn',
        'name': 'Enhet 3 - Butikslokal',
        'price': 5100000,
        'rent': 16000,
        'picture': 'butiksenhet.png',
        'size': 384,
        'sold': false
      }];
  }

}
