import { ServerService } from './../serverService/server.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export interface serverData{
  id?: number,
  name?:string,
  status?:string
}
@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<serverData> {

  constructor(public serverService:ServerService) { }
  resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): serverData | Observable<serverData> | Promise<serverData> {
    return this.serverService.getServer(route?.params.id);
  }


}
