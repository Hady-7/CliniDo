import { DrCity } from './DrCity.model';
import { DrCategory } from './DrCategory.model';
import { DrArea } from './DrArea.model';
export interface Doctor{
  firstName:string,
  lastName:string,
  mobile:number,
  drCategory:DrCategory[],
  drCity:DrCity[],
  drArea:DrArea[],
}
