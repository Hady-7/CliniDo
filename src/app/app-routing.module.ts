import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { SearchComponent } from './HomeScreen/search/search.component';

const routes: Routes = [
  {path:"",component: FindDoctorComponent},
  {path:"newDoctor",component:DoctorFormComponent},
  {path:"search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
