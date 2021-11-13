import { Authorize } from './authorization';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private Authorize:Authorize, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(route.queryParams);
    return this.Authorize.IsAuthorized(route.queryParams.allowEdit).then((PassCallback:any)=>{
      return PassCallback();
    })
    .catch((FailCallback:any)=>{
      !FailCallback()&&this.router.navigate(['/home']);
    })
    // throw new Error('Method not implemented.');
  }
  CanActivateChild(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.canActivate(route, state));
  }
}


