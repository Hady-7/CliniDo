import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { DrCategory } from 'src/app/models/DrCategory.model';
import { DrCity } from 'src/app/models/DrCity.model';
import { CategoryService } from 'src/app/services/category.service';
import { CityCatService } from './../../services/city-cat.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.scss']
})
export class FindDoctorComponent implements OnInit {
  @ViewChild("doctorForm",{static:true}) doctorForm!:NgForm;
  queryParams={};
  DoctorForm=<Doctor>{};
  DoctorCategory!:DrCategory[];
  CityCategory!:DrCity[];
  doctors!:Doctor[];

  constructor(private DoctorCatService:CategoryService,private CityCatService:CityCatService,private rout:ActivatedRoute) {
    this.DoctorForm={
      firstName:'',
      lastName:'',
      mobile:0,
      drCategory:[],
      drArea:[],
      drCity:[]
    }
   }

  ngOnInit(): void {
    this.DoctorCategory=this.DoctorCatService.AllDoctorCategory();
    this.CityCategory=this.CityCatService.AllDoctorCity();
    this.queryParams={drCategory:"aaa",drCity:"bbb"};
  }

}
