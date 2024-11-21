  import { Directive, ElementRef, HostListener, Input, } from '@angular/core';

  @Directive({
    selector: '[appHighlightOnFocus]',
    standalone: true
  })
  export class HighlightOnFocusDirective {
    @Input('appHighlightOnFocus') highlightColor: string = 'lightblue';

    constructor(private el: ElementRef) {}

    @HostListener('focus') onFocus(): void {
      this.el.nativeElement.style.backgroundColor = this.highlightColor;
    }

    @HostListener('blur') onBlur(): void {
      this.el.nativeElement.style.backgroundColor = null;
    }
  }
