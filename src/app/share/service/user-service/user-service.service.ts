import { user } from './../../user-detail.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public UserClassifiedList:user[]  =[];
  public Emitter:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  InstantieUser(user:user = {}){
    this.UserClassifiedList.push(user);
  }

  ClassifyUser(user:user  ={}){
    const index =  this.UserClassifiedList.findIndex((value:user)=>user.id  == value.id);
    (this.UserClassifiedList[index].status == 1)?this.UserClassifiedList[index].status = 2:this.UserClassifiedList[index].status = 1;
    return this.UserClassifiedList[index].status;
  }

  PrintUser(){
    return this.UserClassifiedList;
  }

}
