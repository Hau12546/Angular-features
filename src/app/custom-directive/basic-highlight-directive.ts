import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
  selector:'[appHiglightDirective]'
})
export class BasicHighLightDirective implements OnInit{
  constructor(private el:ElementRef){
    this.el.nativeElement.style.backgroundColor='Cyan';
  }

  ngOnInit(): void {

  }

}
