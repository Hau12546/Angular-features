import { AccountInfo } from './../../../share/account-detail.model';
import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from 'src/app/share/service/logging.service';
import { AccountService } from 'src/app/share/service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  providers:[LoggingService]
})
export class AccountDetailComponent implements OnInit {
  @Input('AccountDetail')  AccountDetail:AccountInfo = {};
  @Input('ID') ID:number = 0;
  constructor(private logging:LoggingService, private accountService:AccountService) { }

  ngOnInit(): void {
  }

  UpdateStatusActive(status:string){
    this.accountService.UpdateAccountID(status,this.ID);
    this.AlertStatus(status);
  }

  UpdateStatusInactive(status:string){
    this.accountService.UpdateAccountID(status,this.ID);
    this.AlertStatus(status);
  }

  UpdateStatusUnknown(status:string){
    this.accountService.UpdateAccountID(status,this.ID);
    this.AlertStatus(status);
  }

  AlertStatus(status:string = 'Unknown'){
    // this.accountService.Emitter.next(status);
    // this.accountService.Emitter.error('No data found');
    // this.accountService.Emitter.complete();
    this.accountService.Emitter.emit(status);
  }

}
