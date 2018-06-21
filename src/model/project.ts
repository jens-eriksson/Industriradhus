import { IUnit } from './unit';

export interface IProject {
    id: string;
    name: string;
    mainDescription: string;
    units: IUnit[];
}


