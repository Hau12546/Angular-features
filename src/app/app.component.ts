import { Component, ContentChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExercise';
  ServerList:{type:string, name:string, content:string}[] = [];
  EvenNumberList:number[] = []
  OddNumberList:number[] = []
  RenderNewServer(e:any){
    this.ServerList.push({type:e.type, name:e.name, content:e.content});
  }

  RenderNumber(event:any)
  {
    this.EvenNumberList.push(event);
  }
}
