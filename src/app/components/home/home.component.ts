import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('about') about!: ElementRef;

  public scrollTo(data: any) {
    console.log(data);

    data == 'projects' ? this.projects.nativeElement.scrollIntoView({ behavior: 'smooth' }) : data == 'about' ? this.about.nativeElement.scrollIntoView({ behavior: 'smooth'}) : null;
  }


  calculateYearsPassed(): number {
    
    let specificDate = new Date('2004-04-24');

    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - specificDate.getFullYear();

    // Check if the current month and day are before the month and day of the specific date
    if (
      currentDate.getMonth() < specificDate.getMonth() ||
      (currentDate.getMonth() === specificDate.getMonth() &&
        currentDate.getDate() < specificDate.getDate())
    ) {
      return yearsPassed - 1;
    }

    return yearsPassed;
  }
}
