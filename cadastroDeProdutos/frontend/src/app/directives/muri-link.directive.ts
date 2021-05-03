import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[MuriLink]'
})
export class MuriLinkDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.onclick = () =>  window.open("https://cdn.discordapp.com/attachments/748340007441530940/823693124365975623/unknown.png");
    

    el.nativeElement.addEventListener('mouseenter', () => {
      el.nativeElement.style = 
      `
      opacity: 80%; 
      cursor:pointer;
      transition: opacity 0.5s
      `
    })

    el.nativeElement.addEventListener('mouseleave', () => {
      el.nativeElement.style = 
      `
      opacity: 100%;
      transition: opacity 0.5s
      `
    })
  }
  }
