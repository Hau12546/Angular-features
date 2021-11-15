import { ObserUserService } from './../../share/service/observable-user-service/obser-user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { observableUSer } from './../../share/observable-user.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.css']
})
export class ObservableUserComponent implements OnInit,OnDestroy {
  @Input('userData') user:observableUSer = {};
  SubscriptionList:Subscription[] = [];
  constructor(private router:Router, private activeRoute:ActivatedRoute, private userObserver:ObserUserService) { }

  ngOnInit(): void {
    this.GetIDFromObservableParamsWithSubscribe();
  }

  GetIDFromObservableParamsWithSubscribe(){
    const Subscription1= this.activeRoute.params.subscribe((targetUser:Params)=>{
      console.log(targetUser)
      this.user.id = targetUser.id;
      this.user.name =  targetUser.name;
    });
    this.AddSubscription(Subscription1);
  }

  AddSubscription(subscribe:Subscription){
    this.SubscriptionList.push(subscribe);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.SubscriptionList.forEach((subscribe:Subscription)=>{
      subscribe.unsubscribe();
    })
  }
  PassUserStatus(){
    this.userObserver.GetEmitter().next((this.userObserver.ShowStatus));
    this.userObserver.SendStringTest();
  }

}
