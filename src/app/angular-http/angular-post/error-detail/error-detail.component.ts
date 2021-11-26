import { Component, Input, OnInit } from '@angular/core';
import { ErrorInfo } from 'src/app/share/post-info.modle';

@Component({
  selector: 'app-error-detail',
  templateUrl: './error-detail.component.html',
  styleUrls: ['./error-detail.component.css']
})
export class ErrorDetailComponent implements OnInit {
  @Input('Error') Error:ErrorInfo = {}
  IsOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  CloseMsg(){
    this.IsOpen = false;
  }

}
