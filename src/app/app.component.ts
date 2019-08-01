import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'coo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedLanguage = 'en';
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(this.selectedLanguage);
    translateService.use(this.selectedLanguage);
  }

  changeLanguage = (lang: string) => {
    this.translateService.use(lang);
  }
}
