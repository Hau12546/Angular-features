import { AccountInfo } from './../../../share/account-detail.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  @Input('AccountDetail')  AccountDetail:AccountInfo = {};
  constructor() { }

  ngOnInit(): void {
  }

}
