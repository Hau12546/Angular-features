import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingStatusService {
  ActiveChanged:number=0;
  InActiveChanged:number = 0;
  constructor() { }
  ActiveToInActive(status:number){
    if(status == 1){
      this.ActiveChanged+=1;
      console.log(`Number of active changed to active ${this.ActiveChanged}`)
    }
    if(status == 2){
      this.InActiveChanged+=1;
      console.log(`Number of active changed to inactive ${this.InActiveChanged}`)
    }
  }
}
