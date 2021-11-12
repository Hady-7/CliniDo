import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';

const routes: Routes = [
  {path:"",component: FindDoctorComponent},
  {path:"newDoctor",component:DoctorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
