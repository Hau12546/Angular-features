import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { NewAccountComponent } from './account-list/new-account/new-account.component';
import { AccountDetailComponent } from './account-list/account-detail/account-detail.component';
import { AccountService } from '../share/service/account.service';
import { UserComponent } from './user/user.component';
import { ActiveUserComponent } from './user/active-user/active-user.component';
import { InactiveUserComponent } from './user/inactive-user/inactive-user.component';
import { UserServiceService } from '../share/service/user-service/user-service.service';
import { LoggingService } from '../share/service/logging.service';
import { TrackingStatusService } from '../share/service/user-service/tracking-status.service';



@NgModule({
  declarations: [
    AccountListComponent,
    NewAccountComponent,
    AccountDetailComponent,
    UserComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[AccountService,UserServiceService,LoggingService,TrackingStatusService],
  exports:[
    NewAccountComponent,AccountListComponent,AccountDetailComponent,
    UserComponent,ActiveUserComponent,InactiveUserComponent
  ]
})
export class DIModule { }
