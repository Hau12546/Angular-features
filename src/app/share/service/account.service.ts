import { LoggingService } from './logging.service';
import { AccountInfo } from 'src/app/share/account-detail.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public AccountList:AccountInfo[]  = [];
  public Emitter:EventEmitter<string> = new EventEmitter();
  constructor(private logging:LoggingService) {
  }

    AddAccount(account:any = {}){
    try {
      this.CheckValidAccount(account)&&this.AccountList.push(account);
    } catch (error) {
      console.log(error);
    }
    console.log(this.AccountList)
  }

  UpdateAccountID(status:string,index:number){
    console.log(this.AccountList)
    try {
      if(status.length>0){
        this.AccountList[index].status = status;
        this.AccountList[index].id = index;
        this.logging.LogMessage('Status changed -^-^-')
      }
    } catch (error) {
      console.log(error);
    }
  }

  CheckValidAccount(account:AccountInfo = {}){
    if(Object.keys(account).length>0){
      return true;
    }
    return false;
  }

}
