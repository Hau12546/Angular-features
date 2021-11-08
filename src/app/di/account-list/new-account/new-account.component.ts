import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountInfo } from 'src/app/share/account-detail.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output('Emitter') Emitter:EventEmitter<AccountInfo> =  new EventEmitter();
  NewAccount:AccountInfo = {};
  StatusList:string[] = ['Active','Inactive','Unknown']
  constructor() { }

  ngOnInit(): void {
  }

  GetAccountName(name:string){
    this.NewAccount.name  = name;
  }

  GetAccountRole(role:string){
    this.NewAccount.role = role;
  }

  GetAccountStatus(status:string){
    this.NewAccount.status = status;
  }

  CreateNewAccount(){
    // console.log(this.NewAccount);
    this.Emitter.emit(this.NewAccount);
  }
}
