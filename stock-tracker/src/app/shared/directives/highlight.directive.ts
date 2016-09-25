import { Directive , HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {

 private el: HTMLElement;
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.style.backgroundColor = color;
}

}
