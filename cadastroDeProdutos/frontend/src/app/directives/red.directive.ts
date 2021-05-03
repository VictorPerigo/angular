import { Directive, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "rgb(221, 114, 108)"
  }

}
