import { Component, EventEmitter, Output, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  @Output() scroll: EventEmitter<any> = new EventEmitter<any>();

  scrollTo(destination: string) {
    this.scroll.emit(destination);
  }

  
}
