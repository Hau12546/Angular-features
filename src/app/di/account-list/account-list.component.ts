import {
  AccountInfo
} from './../../share/account-detail.model';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  LoggingService
} from 'src/app/share/service/logging.service';
import {
  AccountService
} from 'src/app/share/service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountListComponent implements OnInit {
  AccountList: AccountInfo[] = [];
  constructor(private logging: LoggingService, private account: AccountService) {}

  ngOnInit(): void {
    this.account.Emitter.subscribe((value: string) => {
      alert(`Status ${value}`)
    }, (value: string) => {
      alert(`Error ${value}`)
    }, () => {
      console.log('Emition is done')
    });
  }

  RenderNewAccount(e: any) {
    this.account.AddAccount(e);
    this.AccountList = this.account.AccountList;
    this.logging.LogMessage(`New Account Name: ${e.name} - Role: ${e.role} is created.`);
  }


}
