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
  // textDir: string = 'rtl';
  constructor(public translate:TranslateService,public langSer:LanguageService) {
    // this.currentLang=localStorage.getItem('currentLang') || 'en';
    // translate.use(this.currentLang);
   }
   changeLang(e:any){
     const html=document.getElementsByTagName("html");
     if(e=="ar"){
       html[0].setAttribute("dir","rtl");
       html[0].classList.add("text-right");
       this.translate.use(e);
       localStorage.setItem("currentLang","ar");
       this.langSer.changeCssFile(e);
     }else{
       this.translate.use(e);
       html[0].setAttribute("dir","ltr");
       html[0].classList.add("text-left");
       localStorage.setItem("currentLang","en");
       this.langSer.changeCssFile(e);
     }
   }

  //  changeCssFile(lang: String): void {
  //   let headTag = document.getElementsByTagName("head")[0] as HTMLHeadElement;
  //   let existingLink = document.getElementById("langCss") as HTMLLinkElement;
  //   if (lang === 'ar') {
  //     let bundleName = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.rtl.min.css";
  //     // note that arrangement  differ in loading
  //     existingLink.type = "text/css";
  //     existingLink.crossOrigin = "anonymous";
  //     existingLink.integrity = "sha384-+qdLaIRZfNu4cVPK/PxJJEy0B0f3Ugv8i482AKY7gwXwhaCroABd086ybrVKTa0q";
  //     existingLink.href = bundleName;
  //     console.log("integrity changed")


  //   } else {
  //     let bundleName = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
  //     // note that arrangement  differ in loading
  //     existingLink.rel = "stylesheet";
  //     existingLink.type = "text/css";
  //     existingLink.crossOrigin = "anonymous";
  //     existingLink.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
  //     existingLink.href = bundleName;
  //     console.log("integrity changed")

  //   }
  // }

  ngOnInit(): void {

  }
}
