import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {
  UsernameSuggestionList:string[] = ['Mathew','Dianna','Jeffrey','John','Hau'];
  ValidateQuestionList:string[] = ['1+1','can a dog fly','The city of Newyork is located in '];
  GenderList:string[] = ['Male','Female','Unknown'];
  DefaultQuestion:string = this.ValidateQuestionList[0];
  answer:string = '';
  UserInfo:{name?:string, email?:string, gender?:string, questions?:string, answer?:string } = {};
  ShowData:boolean = false;
  @ViewChild('info') info:NgForm | undefined

  constructor() { }

  ngOnInit(): void {
  }

  SuggestUserName(){
    const SuggestedName = this.UsernameSuggestionList.pop() || '';
    this.info?.form.patchValue({userInfo:{
      username:SuggestedName,
    }});
    // this.info?.setValue({userInfo:{
    //   username:SuggestedName,
    //   email:'',
    //   gender:'',
    //   questions:'',
    //   answer:''
    // }})
    this.UsernameSuggestionList.unshift(SuggestedName);
  }



  onSubmit(){
    // this.answer = `UserName: ${this.UserInfo.name} UserEmail: ${this.UserInfo.email} UserAnswer: ${this.answer}`;
    console.log(this.info)
    this.UserInfo.name = this.info?.value.userInfo.username;
    this.UserInfo.email = this.info?.value.userInfo.email;
    this.UserInfo.gender = this.info?.value.userInfo.gender;
    this.UserInfo.questions = this.info?.value.userInfo.questions;
    this.UserInfo.answer = this.info?.value.userInfo.answer;
    if(Object.values(this.UserInfo).length==5){
      this.ShowData = true;
      this.info?.reset();
      return;
    }
    this.ShowData = false;
  }

}
