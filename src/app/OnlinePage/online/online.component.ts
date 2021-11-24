import { Component, OnInit } from '@angular/core';
import { DrCategory } from './../../models/DrCategory.model';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
  DoctorCategory!:DrCategory[];

  constructor( private DoctorCatService:CategoryService,) { }

  ngOnInit(): void {
    this.DoctorCategory = this.DoctorCatService.AllDoctorCategory();
  }

}
