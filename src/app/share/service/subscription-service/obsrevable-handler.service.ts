import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsrevableHandlerService {
  private SubscriptionList:Subscription[] = [];
  private SubscriptionConvert: Subscription = new Subscription;
  constructor() { }

  GetSubscribeList(){
    return this.SubscriptionList.slice();
  }

  AddSubscribe(subscribe:any){
    this.SubscriptionConvert = subscribe;
    this.SubscriptionList.push(this.SubscriptionConvert);
  }

  UnSubscribe(){
    this.SubscriptionList.forEach((subscribe:Subscription)=>{
      subscribe.unsubscribe();
    })
  }

}
