import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage:string = 'Not implemented!';
  constructor(private activeLink:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.GetErrorMessageFromStaticDataOnLink();
  }

  GetErrorMessageFromStaticDataOnLink(){
    this.activeLink.data.subscribe((errorMessage:Params)=>{
      this.errorMessage = errorMessage.message;
    })
  }

}
