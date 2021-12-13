import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang!:string;
  imgSrc!:boolean;
  // textDir: string = 'rtl';
  constructor(public translate:TranslateService,public langSer:LanguageService) {
   }
   changeLang(e:any){
     this.imgSrc=!this.imgSrc;
     const html=document.getElementsByTagName("html");
     if(e=="ar"){
       html[0].setAttribute("dir","rtl");
       html[0].classList.add("text-right");
       this.translate.use(e);
       localStorage.setItem("currentLang","ar");
       this.langSer.changeCssFile(e);
      //  this.imgSrc='../../../assets/images/egypt.png';
     }else{
       this.translate.use(e);
       html[0].setAttribute("dir","ltr");
       html[0].classList.add("text-left");
       localStorage.setItem("currentLang","en");
       this.langSer.changeCssFile(e);
      //  this.imgSrc='../../../assets/images/english.png';
     }
   }


  ngOnInit(): void {

  }
}
