import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( public elem : ElementRef) {
    this.elem.nativeElement.style.color = 'darkblue';
    this.elem.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.color = 'green';

  }


  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.color = 'red';

  }
}
