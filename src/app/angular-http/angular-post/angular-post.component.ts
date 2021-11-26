import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  ErrorInfo,
  Post,
  PostInfo
} from 'src/app/share/post-info.modle';
import {
  HttpPostServiceService
} from 'src/app/share/service/httpPostService/http-post-service.service';
import {
  NgxSpinnerService
} from "ngx-spinner";
import { catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-angular-post',
  templateUrl: './angular-post.component.html',
  styleUrls: ['./angular-post.component.css']
})
export class AngularPostComponent implements OnInit {
  PostList: PostInfo[] = [
    // new Post("HauNT", 'FPT Test Dev'),
    // new Post("SanNT", 'FPT BE')
  ];
  @ViewChild('post') PostData: NgForm | undefined;
  ErrorObject: ErrorInfo = {};
  IsFetching: boolean = false;
  Isloading: boolean = false;
  IsError: boolean = false;
  SubscriptionList:Subscription[] = [];
  constructor(private postService: HttpPostServiceService, private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.FetchPost();
  }

  async FetchPost() {
    const Subscribe1 =  (await this.postService.GetPostList()).subscribe((value: PostInfo[]) => {
      console.log(value);
      this.PostList = value;
      this.IsError = false;
      },
      (errorMsg: string) => {
        this.RenderError('410','Gone',errorMsg);
      }
    );
    this.SubscriptionList.push(Subscribe1);
  };

  RenderError(msgId:string = '', msgTitle:string = '', msgContent:string = '') {
    if (msgId.length > 0 && msgTitle.length > 0 && msgContent.length > 0) {
      this.IsError = true;
      this.ErrorObject = {
        id: msgId,
        title: msgTitle,
        content: msgContent
      };
      return;
    }
    this.IsError = false;
    throw new Error('Not enough ErrInfo found')
  }

  SendPost() {
    const NewPost: PostInfo = {
      title: this.PostData?.value.title,
      content: this.PostData?.value.content
    };
    this.postService.SendPost(NewPost);
  };

  ClearPosts() {
    this.postService.DeletePostRequest().subscribe(() => {
      this.PostList = [];
      // this.RenderError('451','Unavailable For Legal Reasons',errorMsg);
    });
  }

  Loading(state: boolean = false) {
    this.Isloading = state;
    this.Isloading && this.spinner.show() || !this.Isloading || this.spinner.hide();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.SubscriptionList.forEach((subscribe:Subscription) => {
      subscribe.unsubscribe();
    });
  }
}
