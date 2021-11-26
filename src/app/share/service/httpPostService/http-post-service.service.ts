import { PostInfo } from 'src/app/share/post-info.modle';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { FirebaseAPI } from './firebase-api';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpPostServiceService {
  private PostList:PostInfo[] = [];
  public PostListEmitter  = new Subject<PostInfo[]>();
  IsProcessing:boolean = false;
  constructor(private http:HttpClient) { }

  async GetPostList(){
    return await this.FetchPost();
  };

   FetchPost(){
    let searchParams = new HttpParams()
    searchParams = new HttpParams().set('data','yes');
    this.http.get<{[key:string]:PostInfo}>(FirebaseAPI.GetAPI,
      {
        headers: new HttpHeaders({'Custom-Header' :'hello'}),
        // params: new HttpParams().set('data','yes')
        params:searchParams,
        observe:'body', //setting body to get only the data
        responseType:'json' //setting the return type of data
      }
      ).pipe(map(((response)=>{
      let PostListTemp:PostInfo[] = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          PostListTemp.push({...response[key], id:key});
        };
      };
      return PostListTemp;
    }))).subscribe((Posts:PostInfo[] = [])=>{
      this.PostList = Posts;
      if(Posts.length>0) this.PostListEmitter.next(this.PostList);
      if(Posts.length==0) this.PostListEmitter.error('Can not fetch data!');
    });
    return this.PostListEmitter;
  };

  SendPost(post:PostInfo = {}){
    if(Object.values(post).length<0) throw new Error('451 Unavailable For Legal Reasons');
    this.http.post<{[key:string]:PostInfo}>(FirebaseAPI.PostAPI,post).subscribe((value:any)=>{
    });
  };

  DeletePostRequest(){
   return this.http.delete(FirebaseAPI.PostAPI,{observe:'events'}).pipe(tap(
     (response:any)=>{
      if(response.type == HttpEventType.Sent){
        console.log(response.type)
      }
      if(response.type = HttpEventType.Response)
      {
        console.log(response.body);
      }
     }
   ));
  }

}
