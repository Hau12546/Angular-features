import { user } from './../../../share/user-detail.model';
import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from 'src/app/share/service/user-service/user-service.service';
import { TrackingStatusService } from 'src/app/share/service/user-service/tracking-status.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input('InactiveUser') InactiveUser:user = {};
  constructor(private user:UserServiceService, private tracking:TrackingStatusService) { }

  ngOnInit(): void {
  }

  ChangeToActive(){
    const StatusAfterChanged = this.user.ClassifyUser(this.InactiveUser) || 0;
    this.tracking.ActiveToInActive(StatusAfterChanged);
    this.user.Emitter.emit(true);
  }

}
