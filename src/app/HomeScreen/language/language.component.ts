import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang!:string;
  textDir: string = 'rtl';
  constructor(public translate:TranslateService,private render:Renderer2) {
    this.currentLang=localStorage.getItem('currentLang') || 'en';
    translate.use(this.currentLang);
    // this.changeDir();
  //  document.documentElement.dir=['en,ar'].includes(document.documentElement.lang)?'ltr':'rtl'
    // if(document.documentElement.lang==="ar"){
    //   // document.documentElement.dir==="rtl"
    //   this.render.setAttribute(document.querySelector('html'),'dir','rtl')
    // }else if(document.documentElement.lang==="en"){
    //   // document.documentElement.dir==="ltr"
    //   this.render.setAttribute(document.querySelector('html'),'dir','ltr')
    // }
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    // {
    //   if(event.lang == 'ar')
    //   {
    //     this.textDir = 'rtl';
    //   }
    //   else
    //   {
    //     this.textDir = 'ltr';
    //   }
    // });

   }

  ngOnInit(): void {
    // this.translate.addLangs(['en', 'ar']);
    // this.translate.setDefaultLang('en');
  }
  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang)
  }
  // switchLang(lang: string) {
  //   const htmlTag =document.documentElement.getElementsByTagName("html")[0] as HTMLHtmlElement;
  //   htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
  //   htmlTag.lang = lang;
  //   this.translate.use(lang);
  // }
}
