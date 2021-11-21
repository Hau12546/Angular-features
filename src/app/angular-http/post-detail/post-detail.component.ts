import { Post, PostInfo } from './../../share/post-info.modle';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input('PostInfo') Post:PostInfo = {};
  constructor() { }

  ngOnInit(): void {
  }

}
