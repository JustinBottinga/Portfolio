import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  selected: string;

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('en')
    this.selected = this.translateService.defaultLang
  }

  /**
   * switchLanguage
   * @argument language: string     */
  public switchLanguage(language: string) {
    this.selected == 'en' ? this.selected = 'nl' : this.selected = 'en';
    this.translateService.use(language);
    
  }
}
