import { ResolveService } from './../../share/service/resolve-service/resolve.service';
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
import { ServerService } from 'src/app/share/service/serverService/server.service';
import { AuthService } from 'src/app/share/service/auth-guard-service/auth.service';
import { Authorize } from 'src/app/share/service/auth-guard-service/authorization';
import { CanDeactiveGuard } from 'src/app/share/service/can-deactive-guard/can-deactive.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ErrorPageComponent } from '../error-page/error-page.component';




@NgModule({
  declarations: [
    HomeComponent,
    RoutingfeatureComponent,
    UsersComponent,
    ServersComponent,
    ViewUserComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(CustomRoutes,{useHash:true})
  ],
  providers:[ServerService, AuthService, Authorize,CanDeactiveGuard,ResolveService],
  exports:[
    HomeComponent,
    RoutingfeatureComponent,
    UsersComponent,
    ServersComponent,
    ViewUserComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ]
})
export class RoutingFeatureModule { }
