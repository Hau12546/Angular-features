import {
  ServerService
} from './../../../share/service/serverService/server.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanDeactivate,
  Params,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {
  Observable,
  Subscription
} from 'rxjs';
import { CanComponentDeactivate } from 'src/app/share/service/can-deactive-guard/can-deactive.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate{
  server: {
    id: number,
    name: string,
    status: string
  } = {
    id: 1,
    name: 'HauNT',
    status: 'online'
  };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  ListOfSubscription: Subscription[] = [];
  changedSave: boolean = false;
  constructor(private router:Router ,private activeRoute: ActivatedRoute, private serverService: ServerService) {}



  ngOnInit() {
    this.GetServerFromQueryParams();
  }

  GetServerFromServerService(id: number = -1) {
    if (id == -1) {
      throw new Error('No Server ID found');
    }
    try {
      this.server = this.serverService.getServer(id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    } catch (error) {
      console.log(error)
    }
  }

  GetServerFromQueryParams() {
    this.activeRoute.queryParams.subscribe((server: Params) => {
      try {
        this.GetServerFromServerService(server['serverID']);
        this.CheckingEditCondition(server['allowEdit']);
      } catch (error) {
        console.log(error);
      }
    });
  }

  CheckingEditCondition(status:string) {
    this.allowEdit = (status=='online') ? false : true;
  }

  AddSubscription(subscribe: Subscription) {
    this.ListOfSubscription.push(subscribe);
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedSave = true;
    this.router.navigate(['/home'],{relativeTo:this.activeRoute});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log(this.serverName, this.server.name)
    if((this.serverName != this.server.name || this.serverStatus != this.server.status) && !this.changedSave)
    {
      return confirm('Changes are not saved. Do you want to continue?');
    }else{
      return true;
    }
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ListOfSubscription.forEach((subscribe: Subscription) => {
      subscribe.unsubscribe();
    })
  }
}
