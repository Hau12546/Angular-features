import { PipeServer } from './../../share/angular-pipe-server.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-pipe-server',
  templateUrl: './angular-pipe-server.component.html',
  styleUrls: ['./angular-pipe-server.component.css']
})
export class AngularPipeServerComponent implements OnInit {
  @Input('Server') Server:PipeServer = {};
  constructor() { }

  ngOnInit(): void {
  }

}
