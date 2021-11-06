import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('TransmitValue') private IncrementValue:EventEmitter<number> = new EventEmitter();
  @Input('ResultNumber') private ResulNumber:number = 0;
  private SaveTemp:number=0;
  constructor() { }

  ngOnInit() {
    this.CustomTimer();
  }

  GetStartValue(StartValue:string = '1'){
    if(!Number(StartValue)) return;
    this.StopGame();
    this.TransmitValueOnInit(Math.abs(Number(StartValue)));
    this.CustomTimer(Math.abs(Number(StartValue)));
  }

  TransmitValueOnInit(StartValue:number = 0,handler:any=this.IncrementValue){
    handler.emit(StartValue);

  }

  CustomTimer(StartValue:number=0,choice=true,duration:number=1){
    const interval =setInterval(() => {
      StartValue+=1;
      this.TransmitValueOnInit(StartValue);
      console.log(StartValue)
    },duration*1000);
      if(!choice){
        this.SaveTemp = StartValue;
        clearInterval(interval);
      }

  }

  StartGame(){
    this.GetStartValue(this.SaveTemp.toString());
  }

  StopGame(){
    this.CustomTimer(this.SaveTemp,false)
  }
}
