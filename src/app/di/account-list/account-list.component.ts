import { AccountInfo } from './../../share/account-detail.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  AccountList:AccountInfo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  RenderNewAccount(e:any){
    if(Object.keys(e).length>0){
      this.AccountList.push(e);
      return;
    }
  }


}
