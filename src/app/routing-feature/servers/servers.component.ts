import { ServerService } from 'src/app/share/service/serverService/server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];
  constructor(private router: Router, private activeRoute: ActivatedRoute, private serverService:ServerService) { }

  ngOnInit(): void {
    this.GetServerListFromServerService();
  }

  GetServerListFromServerService(){
    this.servers = this.serverService.PrintServerList();
  }


}
