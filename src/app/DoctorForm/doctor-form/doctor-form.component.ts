import { CityCatService } from './../../services/city-cat.service';
import { DrCategory } from './../../models/DrCategory.model';
import { CategoryService } from './../../services/category.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/models/Doctor.model';
import { DrCity } from 'src/app/models/DrCity.model';
import { NewDoctorService } from 'src/app/services/new-doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
// @ViewChild('form')  signupForm!:NgForm;
DoctorForm =<Doctor>{};
DoctorCategory!:DrCategory[];
CityCategory!:DrCity[];
doctors!: Doctor[] ;
  constructor(
    private DoctorCatService:CategoryService,
    private CityCatService:CityCatService,
    private CrudService:NewDoctorService,
  ) {
    this.DoctorForm = {
      firstName:'',
      lastName:'',
      mobile:0,
      drCategory : [],
      drCity : [],
      drArea : [],

    }
  }

  ngOnInit(): void {
    this.DoctorCategory = this.DoctorCatService.AllDoctorCategory();
    this.CityCategory = this.CityCatService.AllDoctorCity();
    this.CrudService.getAllDoctor().subscribe(res => {
    this.doctors = res.map(actions =>{
      const data = actions.payload.doc.data() as Doctor;
      data.id = actions.payload.doc.id;
      return {...data}
    })
    })
  }

  onSubmit(Form:NgForm){
    this.CrudService.AddNewDoctor(Form.value);
    console.log(this.doctors);
  }

}
