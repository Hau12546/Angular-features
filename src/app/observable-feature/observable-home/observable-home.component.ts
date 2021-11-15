import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { filter, first } from 'rxjs/operators';
import { ObserUserService } from 'src/app/share/service/observable-user-service/obser-user.service';
import { ObsrevableHandlerService } from 'src/app/share/service/subscription-service/obsrevable-handler.service';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.css']
})
export class ObservableHomeComponent implements OnInit, OnDestroy {
  Subscription:Subscription = new Subscription;
  DisplayStatus: boolean = false;
  constructor(private observableService:ObsrevableHandlerService, private userObserver:ObserUserService) { }

  ngOnInit(): void {
    this.CustomObservable();
    // this.GetStatusPermission();

  }

  CustomObservable(){
    const Observer1 = new Observable((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
        if(count>3){
          observer.error(`Reach limit ${count}`);
          observer.complete();
        }

      }, 1000);
    });
    const Subscription =  Observer1.pipe().subscribe(
      (count:any)=>{console.log(count)},
      (error:any)=>{console.log(error)},
      ()=>{console.log('done')});
      this.observableService.AddSubscribe(Subscription);
      return Subscription;
  }

  GetStatusPermission(){
    // const Subcribe1 =  this.userObserver.GetEmitter().subscribe((value:boolean)=>{
    //   console.log(value)
    //   this.DisplayStatus = this.DisplayStatus==value;
    // });
    // console.log(this.DisplayStatus);
    // this.observableService.AddSubscribe(Subcribe1);
    const Subcribe2 = this.userObserver.Emitter2.subscribe((value)=>{
      console.log(value);
    });
    this.observableService.AddSubscribe(Subcribe2)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.observableService.UnSubscribe();
  }




}

