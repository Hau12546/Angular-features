import { ResolveService } from './../../../share/service/resolve-service/resolve.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string }  ={id:1,name:'Hau',status:'active'};
  UnSubscribe:Subscription = new Subscription();
  ListOfSubscription:Subscription[] = [];
  constructor(private activeLink:ActivatedRoute, private router:Router,private resolver:ResolveService) { }

  ngOnInit(): void {
    // this.GetIDFromParams();
    // this.GetNameFromParams();
    // this.GetStatusFromParams();
    this.GetServerFromResolver();
  }

  GetServerFromResolver(){
    const subscrbtion4 = this.activeLink.data.subscribe((server:Params)=>{
      this.server = server.targetServer;
    })
  }

  GetIDFromParams(){
    const Subscription1 = this.activeLink.params.subscribe((value:Params )=>{
      this.server.id = value.id;
    });
    this.AddSubscription(Subscription1);
  }

  GetNameFromParams(){
    const Subscription2 =  this.activeLink.params.subscribe((value:Params)=>{
      this.server.name = value.name;
    });
    this.AddSubscription(Subscription2);
  }

  GetStatusFromParams(){
    const Subscription3 =  this.activeLink.params.subscribe((value:Params)=>{
      this.server.status = value.status;
    });
    this.AddSubscription(Subscription3);
  }

  OnEdit() {
    const TransferingTargetServer = this.server;
    this.router.navigate(['/servers',TransferingTargetServer.id,'edit'], {
      relativeTo: this.activeLink,
      queryParams: { serverID:TransferingTargetServer.id, allowEdit:TransferingTargetServer.status },
      // queryParamsHandling:'preserve',
    })
  }

  AddSubscription(Subscribe:Subscription){
    this.ListOfSubscription.push(Subscribe);
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ListOfSubscription.forEach((subscriber:Subscription)=>{
      subscriber.unsubscribe();
    });
  }




}
