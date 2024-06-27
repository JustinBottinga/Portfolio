import { Component } from '@angular/core';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [CvComponent],
})
export class AboutComponent {}
