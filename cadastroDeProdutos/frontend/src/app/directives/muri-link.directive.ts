import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[MuriLink]'
})
export class MuriLinkDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.onclick = () =>  window.open("https://cdn.discordapp.com/attachments/748340007441530940/823693124365975623/unknown.png");
    el.nativeElement.style = "cursor: pointer;"
  }
  }
