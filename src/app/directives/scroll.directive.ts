import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scrollY = window.scrollY;
    const position = (scrollY / vh) * 100;

    const componentElement = this.elementRef.nativeElement; // Assuming componentElement is the element you want to adjust
    const componentWidth = componentElement.offsetWidth;

    // Calculate the maximum distance from the top to ensure the element stays within the screen bounds
    const maxRight = 100 - (componentWidth / vw) * 100;

    // Calculate the position of the element relative to the bottom of the screen
    const toLeft = Math.max(0, Math.min(12 + position / 4, maxRight - 12));

    this.renderer.setStyle(componentElement, 'right', `${toLeft}%`);
  }
}
