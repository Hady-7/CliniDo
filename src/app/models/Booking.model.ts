import { DrCategory } from "./DrCategory.model";

export interface Booking{
  id?:string,
  name:string,
  phone:string,
  email:string,
  DoctorCategory:DrCategory[],
  DoctorName:string,
  time?:string,

}
