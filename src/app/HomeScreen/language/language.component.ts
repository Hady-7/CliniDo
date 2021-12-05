import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang!:string;
  textDir: string = 'rtl';
  constructor(public translate:TranslateService) {
    this.currentLang=localStorage.getItem('currentLang') || 'en';
    translate.use(this.currentLang);
   }
   activeLang='';
   changeLang(e:any){
     const body=document.getElementsByTagName("body");
     if(e=="ar"){
       body[0].setAttribute("dir","rtl");
       this.translate.use(e);
       localStorage.setItem("currentLang","ar")
     }else{
       this.translate.use(e);
       body[0].setAttribute("dir","ltr");
       localStorage.setItem("currentLang","en")
     }
   }

  ngOnInit(): void {
  }
  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang)
  }
}
