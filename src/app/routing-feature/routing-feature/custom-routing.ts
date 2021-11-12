import { ServersComponent } from './../servers/servers.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
export const CustomRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'servers',component:ServersComponent},
  {path:'servers/:id/edit',component:EditServerComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id/:name',component:UsersComponent},
  // {path:'',component:HomeComponent},
  // {path:'**',component:HomeComponent}
];
