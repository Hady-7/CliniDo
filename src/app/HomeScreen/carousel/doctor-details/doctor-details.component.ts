import { Doctor } from './../../../models/Doctor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewDoctorService } from 'src/app/services/new-doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
doctor!:Doctor;
  constructor(private DoctorService:NewDoctorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((res)=>{
    //   this.doctor = this.DoctorService.getProductById(res.id);
    //   console.log(this.doctor);
    // });
  }

}
