import { PostInfo } from 'src/app/share/post-info.modle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseAPI } from './firebase-api';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class HttpPostServiceService {
  private PostList:PostInfo[] = [];
  public PostListEmitter  = new Subject<PostInfo[]>();
  constructor(private http:HttpClient) { }

  GetPostList(){
    this.FetchPost();
    return this.PostListEmitter;
  }

  FetchPost(){
    this.http.get<{[key:string]:PostInfo}>(FirebaseAPI.GetAPI).pipe(map(((response)=>{
      let PostListTemp:PostInfo[] = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          return PostListTemp = [{...response[key], id:key}]
        }
        continue;
      }
      return PostListTemp;
    }))).subscribe((Posts:PostInfo[])=>{
      this.PostList = Posts;
      this.PostListEmitter.next(this.PostList);
    });
  }

  SendPost(post:PostInfo = {}){
    if(Object.values(post).length<0) throw new Error('451 Unavailable For Legal Reasons');
    this.http.post<{[key:string]:PostInfo}>(FirebaseAPI.PostAPI,post).subscribe((value:any)=>{
      console.log(value);
    });
  }
}
