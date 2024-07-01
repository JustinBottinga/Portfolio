import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {}
