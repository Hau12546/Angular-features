import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
  @Input('ServerName') ServerName:string = ''; //data binding input
  @Input('ServerContent') ServerContent:string = ''; //data binding input
  @Output('Server') server:EventEmitter<{type:string,name:string, content:string}> = new EventEmitter(); // data output transmit to parent
  @ViewChild('Name') Name:ElementRef<any>|undefined; // used this to get data from the current element on the component just like #ServerName
  constructor() { }

  ngOnInit(): void {
    console.log('opninit')
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  GetServer(severName:string='undefined'){
    console.log(this.Name?.nativeElement.value)
    this.ServerName =  severName;
  }


  GetBlueprint(serverContent:string='undefined'){
    this.ServerContent = serverContent;
  }

  CreateServer(type:string){
    this.server.emit({type:type,name:this.ServerName, content:this.ServerContent});
  }

  CreateServerScheme(type:string){
    this.server.emit({type:type,name:this.ServerName, content:this.ServerContent});
  }


  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('content init')

  }

  ngAfterContentChecked(){
    console.log('Content Checked')
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('view init')
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('after view checked');
  }

}
