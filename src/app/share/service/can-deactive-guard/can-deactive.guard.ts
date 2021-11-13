import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanComponentDeactivate  {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean,
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component:CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}



