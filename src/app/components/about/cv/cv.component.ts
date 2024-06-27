import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  today: Date = new Date();
  specificDate = new Date('2024-07-01'); // Example specific date
  passed: boolean = false;

  constructor() {
    if (this.today > this.specificDate) {
      this.passed = true;
    }
  }
}
