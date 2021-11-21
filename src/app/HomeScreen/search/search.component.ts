import { Component, OnInit } from '@angular/core';
import { CityCatService } from 'src/app/services/city-cat.service';
import { DrCategory } from 'src/app/models/DrCategory.model';
import { NewDoctorService } from 'src/app/services/new-doctor.service';
import { DrCity } from 'src/app/models/DrCity.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityCat?:DrCity[];
  filterItem:any;
  doctors!: Doctor[] ;
  specialities!:DrCategory[];


  constructor(private city:CityCatService,private docotrName:NewDoctorService,private category:CategoryService) { }

  ngOnInit(): void {
    this.specialities=this.category.DoctorCategory;
    this.cityCat=this.city.CityCategory;
    this.docotrName.getAllDoctor().subscribe(res => {
    this.doctors = res.map(actions =>{
      const data = actions.payload.doc.data() as Doctor;
      data.id = actions.payload.doc.id;
      return {...data}
    })
    })

  }

}
