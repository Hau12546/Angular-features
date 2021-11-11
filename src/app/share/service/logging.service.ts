import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  LogMessage(message:string){
    if(typeof(message)=='string' && message.length>0){
      console.log(message);
      return;
    }
    console.log('No message found !!!')
  }
}
