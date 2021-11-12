import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ReloadServer() {
    this.router.navigate(['/servers', 1, 'edit'], {
      relativeTo: this.activeRoute, queryParams: { allowEdit: '1' },
      fragment: 'loading'
    })
  }

}
