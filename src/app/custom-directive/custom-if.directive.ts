import { Directive, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {
  @Input() set appCustomIf(condition:boolean){
    this._condition = !condition;
    if(condition){
      this.Vel.createEmbeddedView(this.Tel);
    }else {
      this.Vel.clear();
    }
  }
  get appCustomIf(){
     return this._condition;
   }
   _condition:boolean=false;
  constructor(private Tel:TemplateRef<any>, private Vel:ViewContainerRef ) {

   }

}
