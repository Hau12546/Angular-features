import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input('Even') Even:number=0;
  @ContentChild('EvenLabel') EvenLabel:ElementRef|undefined;
  constructor() { }
  Title:string = 'Odd';
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes.Even.currentValue%2==0){
      this.Title = 'Even';
    }
  }

}
