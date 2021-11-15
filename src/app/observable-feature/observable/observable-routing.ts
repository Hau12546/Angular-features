import { ObservableUserComponent } from './../observable-user/observable-user.component';
import { ObservableHomeComponent } from './../observable-home/observable-home.component';
import { ObservableFeatureComponent } from './../observable-feature/observable-feature.component';
import { Routes } from '@angular/router';
export const customRoute:Routes = [
  {path:'observable-home',component:ObservableHomeComponent},
  {path:'observable-user/:id/:name',component:ObservableUserComponent},
  {path:'',pathMatch:'full',component:ObservableHomeComponent},
  {path:'**',pathMatch:'full',redirectTo:''},
]
