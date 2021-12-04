import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.scss']
})
export class StaticContentComponent implements OnInit {

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }

}
