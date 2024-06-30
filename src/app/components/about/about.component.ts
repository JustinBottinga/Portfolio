import { Component } from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [CvComponent, TranslateModule],
})
export class AboutComponent {}
