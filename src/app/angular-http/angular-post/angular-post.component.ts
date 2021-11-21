import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostInfo } from 'src/app/share/post-info.modle';
import { HttpPostServiceService } from 'src/app/share/service/httpPostService/http-post-service.service';

@Component({
  selector: 'app-angular-post',
  templateUrl: './angular-post.component.html',
  styleUrls: ['./angular-post.component.css']
})
export class AngularPostComponent implements OnInit {
  PostList:PostInfo[] = [
    new  Post("HauNT",'FPT Test Dev'),
    new  Post("SanNT",'FPT BE')
  ];
  @ViewChild('post') PostData:NgForm|undefined;
  constructor(private postService:HttpPostServiceService) { }

  ngOnInit(): void {
    this.FetchPost();
  }

  FetchPost(){
    const List = this.postService.GetPostList().subscribe((value:PostInfo[])=>{
      this.PostList = value;
      console.log(this.PostList);
    });
  }

  SendPost(){
    console.log(this.PostData);
    const NewPost:PostInfo = {
      title:this.PostData?.value.title,
      content:this.PostData?.value.content
    };
    this.postService.SendPost(NewPost);
  }
}
