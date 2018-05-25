import { IUnit } from '../unit/unit';

export interface IProject {
    id: string;
    name: string;
    description: string;
    units: IUnit[];
}

