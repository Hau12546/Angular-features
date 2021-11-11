import { user } from './../../share/user-detail.model';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/share/service/user-service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserServiceService]
})
export class UserComponent implements OnInit {
  UserList:user[] = [];
  User:user = {}
  constructor(private UserService:UserServiceService) {
      this.UserService.Emitter.subscribe((value:boolean)=>{
        value&&this.RenderUser();
      })
   }

  ngOnInit(): void {
    this.RenderUser();
  }

  RenderUser(){
    this.UserList = this.UserService.PrintUser();
  }
  GetUserName(name:string){
    return name;
  }

  GetUserStatus(status:string = '1'){
    return Number(status);
  }

  CreateUser(name:string, status:string){
    this.User.id  = this.UserList.length;
    this.UserService.InstantieUser({id:this.UserList.length,name:name,status:Number(status)});
    this.RenderUser();
  }

}
