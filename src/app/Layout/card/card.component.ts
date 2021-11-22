import { Doctor } from 'src/app/models/Doctor.model';
import { Component, OnInit } from '@angular/core';
import { NewDoctorService } from 'src/app/services/new-doctor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
Doctor!:Doctor[];
  constructor(private CrudService:NewDoctorService) { }

  ngOnInit(): void {
    this.CrudService.getAllDoctor().subscribe(res => {
      console.log(this.Doctor = res.map(
        resss => resss.payload.doc.data() as Doctor
       ));
    })
    console.log(this.Doctor);
  }

}
