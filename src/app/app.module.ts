import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment4Module } from './assignment4/assignment4/assignment4.module';
import { CockpitComponent } from './cockpit/cockpit.component';
import { BasicHighLightDirective } from './custom-directive/basic-highlight-directive';
import { SeverElementComponent } from './sever-element/sever-element.component';
import { BetterHighlightDirectiveDirective } from './custom-directive/better-highlight-directive.directive';
import { CustomIfDirective } from './custom-directive/custom-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    SeverElementComponent,
    BasicHighLightDirective,
    BetterHighlightDirectiveDirective,
    CustomIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Assignment4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
