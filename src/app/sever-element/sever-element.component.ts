import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css']
})
export class SeverElementComponent implements OnInit, OnChanges {
  @Input('SeverDetail') SeverDetail:{type:string,name:string, content:string} = {type:'undefined', name:'undefined',content:'undefined'};
  @ContentChild('type') type:ElementRef<any> | undefined;
  constructor() { }

  ngOnInit() { //when component is init
    // console.log('init');
  }

  ngOnChanges(changes: SimpleChanges) { //Fired when SeverDetail is changed
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(changes);
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log('content init')

  }

  ngAfterContentChecked(){
    // console.log('Content Checked')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.type?.nativeElement.innerText);
  }



}
