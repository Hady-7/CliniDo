import { Doctor } from 'src/app/models/Doctor.model';
import { Component, Input, OnInit } from '@angular/core';
import { NewDoctorService } from 'src/app/services/new-doctor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input () doctor!:Doctor;
  doctors!: Doctor[] ;

  constructor(
    private CrudService:NewDoctorService,
  ) { }

  ngOnInit(): void {
    // this.CrudService.getAllDoctor().subscribe(res => {
    //   this.doctors = res.map(actions =>{
    //     const data = actions.payload.doc.data() as Doctor;
    //     data.id = actions.payload.doc.id;
    //     return {...data}
    //   })
    //   })


  }
}


