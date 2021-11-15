import { ObservableModule } from './observable-feature/observable/observable.module';
import { AccountService } from 'src/app/share/service/account.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Assignment4Module } from './assignment4/assignment4/assignment4.module';
import { CockpitComponent } from './cockpit/cockpit.component';
import { BasicHighLightDirective } from './custom-directive/basic-highlight-directive';
import { SeverElementComponent } from './sever-element/sever-element.component';
import { BetterHighlightDirectiveDirective } from './custom-directive/better-highlight-directive.directive';
import { CustomIfDirective } from './custom-directive/custom-if.directive';
import { DIModule } from './di/di.module';
import { RoutingFeatureModule } from './routing-feature/routing-feature/routing-feature.module';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    SeverElementComponent,
    BasicHighLightDirective,
    BetterHighlightDirectiveDirective,
    CustomIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DIModule,
    // RoutingFeatureModule,
    ObservableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
