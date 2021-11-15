import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserUserService {
  public ShowStatus:boolean = false;
  private Emitter:Subject<boolean> = new Subject();

  public Emitter2:BehaviorSubject<string> = new BehaviorSubject('test1');
  public Test = this.Emitter2.asObservable();
  constructor() { }

  GetEmitter(){
    return this.Emitter;
  }

  SendStringTest(){
    this.Emitter2.next('test2');
  }


}
