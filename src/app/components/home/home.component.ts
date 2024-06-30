import { Component } from '@angular/core';
import { BlobComponent } from '../blob/blob.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollDirective } from '../../directives/scroll.directive';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    BlobComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ScrollDirective,
    TranslateModule
  ],
})
export class HomeComponent {


  scrollTo(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  calculateYearsPassed(): number {
    
    let specificDate = new Date('2004-04-24'); // Example specific date

    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - specificDate.getFullYear();

    // Check if the current month and day are before the month and day of the specific date
    if (
      currentDate.getMonth() < specificDate.getMonth() ||
      (currentDate.getMonth() === specificDate.getMonth() &&
        currentDate.getDate() < specificDate.getDate())
    ) {
      return yearsPassed - 1; // Subtract 1 if we haven't reached the anniversary yet
    }

    return yearsPassed;
  }
}
