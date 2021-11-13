import { Authorize } from 'src/app/share/service/auth-guard-service/authorization';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Authorize implements OnInit {

  constructor(private routeService:Router, private authorize:Authorize) {
    super();
   }

  ngOnInit(): void {
  }

  LoadServer(){
    this.routeService.navigate(['/servers']);
  }

  HomeLogIn(){
    this.LogIn();
  }

  HomeLogOut(){
    this.HomeLogOut();
  }

}
