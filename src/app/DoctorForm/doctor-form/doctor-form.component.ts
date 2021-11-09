import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(Form:NgForm){
    console.log(Form.value);
  }
}
