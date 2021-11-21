import { Resolve } from '@angular/router';
import { first } from 'rxjs/operators';
import { ElementRef, OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PipeServer } from 'src/app/share/angular-pipe-server.model';

@Component({
  selector: 'app-angular-pipe-feature',
  templateUrl: './angular-pipe-feature.component.html',
  styleUrls: ['./angular-pipe-feature.component.css']
})
export class AngularPipeFeatureComponent implements OnInit, OnDestroy {
  ServerList:PipeServer[] = [
    {
      instanceType:'large',
      name:'FBI-Agency',
      status:'Active',
      time: new Date()
    },
    {
      instanceType:'medium',
      name:'CIA-Agency',
      status:'Inactive',
      time: new Date()
    },
    {
      instanceType:'small',
      name:'FDA-Agency',
      status:'Stable',
      time: new Date()
    }
  ];
  @ViewChild('TargetStatus') TargetStatus:ElementRef |undefined;
  SortCondition:string = 'Active';
  StatusDisplay:Promise<string> | undefined;
  SubSCriptionList:Subscription[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  SortServerStatus(){
    if(this.TargetStatus?.nativeElement.value.length==0) throw new Error('417 Expectation Failed');
    this.SortCondition = this.TargetStatus?.nativeElement.value;
    this.GetAsynPipe();
  }

  CreaterServer(){
    this.ServerList.push({
      instanceType:'medium',
      name:"Unknown",
      status:this.TargetStatus?.nativeElement.value,
      time: new Date()
    });
    // console.log(this.ServerList);
  }

  GetAsynPipe(){
    this.StatusDisplay = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.SortCondition);
      }, 1000);
    });
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.SubSCriptionList.forEach((subscribe:Subscription)=>{
    //   subscribe.unsubscribe();
    // })
  }


}
