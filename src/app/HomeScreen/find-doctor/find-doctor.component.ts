import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { DrArea } from 'src/app/models/DrArea.model';
import { DrCategory } from 'src/app/models/DrCategory.model';
import { DrCity } from 'src/app/models/DrCity.model';
import { AreaCatService } from 'src/app/services/area-cat.service';
import { CategoryService } from 'src/app/services/category.service';
import { CityCatService } from './../../services/city-cat.service';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.scss']
})
export class FindDoctorComponent implements OnInit {
  DoctorForm=<Doctor>{};
  DoctorCategory!:DrCategory[];
  CityCategory!:DrCity[];
  doctors!:Doctor[];
  AreaCategory!:DrArea[];

  constructor(private DoctorCatService:CategoryService,private CityCatService:CityCatService, private AreaService:AreaCatService) {
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
    this.AreaCategory=this.AreaService.Alexandria;
    console.log(this.AreaCategory);
  }

}
