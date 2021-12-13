import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  local!:boolean;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLocal()
  }

 isLocal()
    {
      if (localStorage.getItem('user'))
      {
         this.local=true;
      }else{
        this.local=false;
      }
    }



}




