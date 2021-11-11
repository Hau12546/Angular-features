import { ServersComponent } from './../servers/servers.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
export const CustomRoutes:Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Servers',component:ServersComponent},
  {path:'Users',component:UsersComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent}
];
