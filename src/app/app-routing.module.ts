import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { OnlineComponent } from './OnlinePage/online/online.component';

const routes: Routes = [
  {path:"",component: FindDoctorComponent},
  {path:"newDoctor",component:DoctorFormComponent},
  {path:"online",component:OnlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
