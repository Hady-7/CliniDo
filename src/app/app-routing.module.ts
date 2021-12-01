import { CarouselComponent } from './HomeScreen/carousel/carousel.component';
import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { SearchComponent } from './HomeScreen/search/search.component';
import { OnlineComponent } from './OnlinePage/online/online.component';
import { DoctorDetailsComponent } from './HomeScreen/carousel/doctor-details/doctor-details.component';

const routes: Routes = [
  {path:"",component: FindDoctorComponent},
  {path:"newDoctor",component:DoctorFormComponent},
  {path:"search",component:SearchComponent},
  {path:"online",component:OnlineComponent},
  {path:"doctorDetails/:id" , component:DoctorDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
