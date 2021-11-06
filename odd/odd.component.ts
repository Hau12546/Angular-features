import { Component, ContentChild, Input, OnInit, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit,DoCheck {
  @Input('Odd') ODD:number=1;
  @ContentChild('Odd') Odd:ElementRef|undefined;
  constructor() { }
  show:boolean = true;
  ngOnInit(): void {
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(Number(this.Odd?.nativeElement.innerText)%2==0)
    {
      this.show = false;
    }
    this.show = true;;
  }

}
