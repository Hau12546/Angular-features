import { ErrorDetailComponent } from './../angular-post/error-detail/error-detail.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  AngularPostComponent
} from '../angular-post/angular-post.component';
import {
  FormsModule
} from '@angular/forms';
import {
  PostDetailComponent
} from '../post-detail/post-detail.component';
import {
  NgxSpinnerModule
} from "ngx-spinner";
import { HttpPostServiceService } from 'src/app/share/service/httpPostService/http-post-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';



@NgModule({
  declarations: [
    AngularPostComponent,
    PostDetailComponent,
    ErrorDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [HttpPostServiceService, {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AngularPostComponent,
    PostDetailComponent,
    ErrorDetailComponent,
  ],
})
export class AngularHttpModule {}
