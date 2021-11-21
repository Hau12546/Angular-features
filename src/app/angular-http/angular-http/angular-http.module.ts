import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPostComponent } from '../angular-post/angular-post.component';
import { FormsModule } from '@angular/forms';
import { PostDetailComponent } from '../post-detail/post-detail.component';



@NgModule({
  declarations: [
    AngularPostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers:[],
  exports:[
    AngularPostComponent,
    PostDetailComponent
  ],
})
export class AngularHttpModule { }
