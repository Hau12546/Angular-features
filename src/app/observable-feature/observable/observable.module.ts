import { ObserUserService } from 'src/app/share/service/observable-user-service/obser-user.service';
import {
  ObservableUserComponent
} from './../observable-user/observable-user.component';
import {
  ObservableHomeComponent
} from './../observable-home/observable-home.component';
import {
  ObservableFeatureComponent
} from './../observable-feature/observable-feature.component';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { customRoute } from './observable-routing';
import { ObsrevableHandlerService } from 'src/app/share/service/subscription-service/obsrevable-handler.service';



@NgModule({
  declarations: [
    ObservableFeatureComponent,
    ObservableHomeComponent,
    ObservableUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(customRoute)
  ],
  providers: [ObsrevableHandlerService, ObserUserService],
  exports: [ObservableFeatureComponent,
    ObservableHomeComponent,
    ObservableUserComponent
  ]
})
export class ObservableModule {}
