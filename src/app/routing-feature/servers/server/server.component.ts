import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string; }  ={id:1,name:'Hau',status:'active'};
  constructor() { }

  ngOnInit(): void {
  }

}
