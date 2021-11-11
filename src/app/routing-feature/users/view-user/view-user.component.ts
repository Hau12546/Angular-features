import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: { id: number; name: string; } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
