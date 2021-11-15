import { ObsrevableHandlerService } from './../../share/service/subscription-service/obsrevable-handler.service';
import { ObserUserService } from './../../share/service/observable-user-service/obser-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-feature',
  templateUrl: './observable-feature.component.html',
  styleUrls: ['./observable-feature.component.css']
})
export class ObservableFeatureComponent implements OnInit {
  DisplayStatus:boolean = false;
  constructor(private userObserver:ObserUserService, private obseverHandler:ObsrevableHandlerService) { }

  ngOnInit(): void {
    this.GetStatusPermission();
  }

  GetStatusPermission(){
    const Subcribe1 =  this.userObserver.GetEmitter().subscribe((value:boolean)=>{
      console.log(value)
      this.DisplayStatus = this.DisplayStatus==value;
    });
    this.obseverHandler.AddSubscribe(Subcribe1);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.obseverHandler.UnSubscribe();
  }

}
