import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CliniDo';
  constructor(){

  }
  changeCssFile(lang: String): void {
    let headTag = document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = document.getElementById("langCss") as HTMLLinkElement;
    if (lang === 'ar') {
      let bundleName = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.rtl.min.css";
      // note that arrangement  differ in loading
      existingLink.type = "text/css";
      existingLink.crossOrigin = "anonymous";
      existingLink.integrity = "sha384-+qdLaIRZfNu4cVPK/PxJJEy0B0f3Ugv8i482AKY7gwXwhaCroABd086ybrVKTa0q";
      existingLink.href = bundleName;
      console.log("integrity changed")


    } else {
      let bundleName = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
      // note that arrangement  differ in loading
      existingLink.rel = "stylesheet";
      existingLink.type = "text/css";
      existingLink.crossOrigin = "anonymous";
      existingLink.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
      existingLink.href = bundleName;
      console.log("integrity changed")

    }
  }


}
