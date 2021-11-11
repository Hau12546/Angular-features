import { TrackingStatusService } from './../../../share/service/user-service/tracking-status.service';
import { UserServiceService } from './../../../share/service/user-service/user-service.service';
import { user } from './../../../share/user-detail.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input('ActiveUser') ActiveUser:user  ={}
  constructor(private user:UserServiceService, private tracking:TrackingStatusService) { }

  ngOnInit(): void {
  }

  ChangeToInActive(){
    const StatusAfterChanged = this.user.ClassifyUser(this.ActiveUser) || 0;
    this.tracking.ActiveToInActive(StatusAfterChanged);
    this.user.Emitter.emit(true);
  }

}
