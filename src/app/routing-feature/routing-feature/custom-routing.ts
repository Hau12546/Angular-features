import { ErrorPageComponent } from './../error-page/error-page.component';
import { CanDeactiveGuard } from './../../share/service/can-deactive-guard/can-deactive.guard';
import { ViewUserComponent } from './../users/view-user/view-user.component';
import { ServerComponent } from './../servers/server/server.component';
import { ServersComponent } from './../servers/servers.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthService } from 'src/app/share/service/auth-guard-service/auth.service';
import { ResolveService } from 'src/app/share/service/resolve-service/resolve.service';
export const CustomRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'servers',component:ServersComponent,
  children:[{path:':id/:name/:status',component:ServerComponent, resolve:{targetServer:ResolveService}},
  {path:':id/edit',
  canActivate:[AuthService],
  canActivateChild:[AuthService],
  canDeactivate:[CanDeactiveGuard],
  component:EditServerComponent} ]},
  {path:'users',component:UsersComponent,
  children:[{path:':id/:name',component:ViewUserComponent}]},
  {path:'',pathMatch:'full',component:PageNotFoundComponent},
  {path:'**',pathMatch:'full',component:ErrorPageComponent,
  data:{message:'404 the server could not find the requested website'}}
];
