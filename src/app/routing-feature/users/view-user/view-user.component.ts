import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: { id?: number, name?: string } = {};
  Subscription:Subscription = new Subscription();
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    }
    this.GetParamsWithObservable();
  }

  GetParamsWithObservable(){
    this.Subscription  = this.activeRoute.params.subscribe((value: Params) => {
      this.user.id = value['id'];
      this.user.name = value['name'];
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.Subscription.unsubscribe();
  }

}
