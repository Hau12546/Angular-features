import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {
  @Input('Bg-color') BgColor:string = '';
  @Input('Text-color') TextColor:string = '';
  @Input('Default-bg-color') DefaultBackgroundColor:string = 'white';
  @Input('Default-text-color') DefaultTextColor:string = 'black'
  @HostBinding('style.background-color') InitialBgColor:string = this.DefaultBackgroundColor;
  @HostBinding('style.color') InitialTextColor:string = this.DefaultTextColor;
  constructor(private el:ElementRef, private render:Renderer2) {
    const EvenNotifyEl = render.createElement('div');
    const EvenNotifyConentEl = render.createElement('p');
    this.AppendEmelent(EvenNotifyConentEl, this.CreateContent('Test'));
    this.AppendEmelent(el.nativeElement,EvenNotifyConentEl);
    // this.SetCustomAttribute(el.nativeElement,'href','#');
   }

   ngOnInit(): void {
      this.InitialBgColor = this.DefaultBackgroundColor;
      this.InitialTextColor = this.DefaultTextColor;
   }


   CreateContent(text:string){
      return this.render.createText(text);
   }

   AppendEmelent(parentEl:any = undefined, childElement:any = undefined){
    this.render.appendChild(parentEl, childElement);
   }

   SetCustomAttribute(targetEl:any,attributeName:string, attributeValue:string){
    this.render.setAttribute(targetEl, attributeName, attributeValue);
   }

   @HostListener('mouseenter',['$event.target']) BlueHighlight(){
    this.render.setStyle(this.el.nativeElement,'background-color',this.BgColor || this.DefaultBackgroundColor);
    this.render.setStyle(this.el.nativeElement,'color',this.TextColor || this.DefaultTextColor);
   }

   @HostListener('mouseleave',['$event.target']) yellowHighlight(){
    this.render.setStyle(this.el.nativeElement,'background-color',this.DefaultBackgroundColor);
    this.render.setStyle(this.el.nativeElement,'color',this.DefaultTextColor);
   }

}
