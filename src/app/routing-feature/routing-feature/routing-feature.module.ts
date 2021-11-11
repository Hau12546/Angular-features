import { RouterModule } from '@angular/router';
import { RoutingfeatureComponent } from './../routingfeature/routingfeature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { ServersComponent } from '../servers/servers.component';
import { ViewUserComponent } from '../users/view-user/view-user.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { CustomRoutes } from './custom-routing';




@NgModule({
  declarations: [
    HomeComponent,
    RoutingfeatureComponent,
    UsersComponent,
    ServersComponent,
    ViewUserComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(CustomRoutes)
  ],
  providers:[],
  exports:[
    HomeComponent,
    RoutingfeatureComponent,
    UsersComponent,
    ServersComponent,
    ViewUserComponent,
    ServerComponent,
    EditServerComponent
  ]
})
export class RoutingFeatureModule { }
