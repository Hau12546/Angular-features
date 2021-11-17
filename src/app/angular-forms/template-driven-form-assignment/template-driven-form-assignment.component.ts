import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-assignment',
  templateUrl: './template-driven-form-assignment.component.html',
  styleUrls: ['./template-driven-form-assignment.component.css']
})
export class TemplateDrivenFormAssignmentComponent implements OnInit {
  @ViewChild('info') Info:NgForm | undefined;
  SubscriptionList:string[] = ['Basic','Advance','Pro'];
  DefaultLevel:string = this.SubscriptionList[0];
  infoData:{email?:string, subscribe?:string, password?:string} = {};
  ShowInfo:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.Info);
    this.infoData.email = this.Info?.value.InfoData.email;
    this.infoData.subscribe = this.Info?.value.InfoData.subscribe;
    this.infoData.password = this.Info?.value.InfoData.password;
    if(this.Info?.valid) this.ShowInfo = true;
    if(!this.Info?.valid) this.ShowInfo = false;

  }

}
