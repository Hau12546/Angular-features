import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string} = {id:1,name:'HauNT',status:'active'};
  serverName = '';
  serverStatus = '';
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((value:Object)=>{
      console.log(value);
    })

    this.activeRoute.fragment.subscribe((value:any)=>{
      console.log(value);
    })
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    // this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }
}
