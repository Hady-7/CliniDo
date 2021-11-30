import { CarouselComponent } from './HomeScreen/carousel/carousel.component';
import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { SearchComponent } from './HomeScreen/search/search.component';
import { OnlineComponent } from './OnlinePage/online/online.component';
import { DoctorDetailsComponent } from './HomeScreen/carousel/doctor-details/doctor-details.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Authentication/verify-email/verify-email.component';


import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './Authentication/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component: FindDoctorComponent ,canActivate:[AuthGuard]},
  {path:"newDoctor",component:DoctorFormComponent},
  {path:"online/search",component:SearchComponent},
  {path:"search",component:SearchComponent},
  {path:"online",component:OnlineComponent},
  {path:"online/doctorDetails" , component:DoctorDetailsComponent},
  {path:"online/search/doctorDetails" , component:DoctorDetailsComponent},
  {path:"doctorDetails" , component:DoctorDetailsComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path:'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
