import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { NewAccountComponent } from './account-list/new-account/new-account.component';
import { AccountDetailComponent } from './account-list/account-detail/account-detail.component';



@NgModule({
  declarations: [
    AccountListComponent,
    NewAccountComponent,
    AccountDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewAccountComponent,AccountListComponent,AccountDetailComponent
  ]
})
export class DIModule { }
