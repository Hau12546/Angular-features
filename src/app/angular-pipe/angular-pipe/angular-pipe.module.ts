import {
  AngularPipeFeatureComponent
} from './../angular-pipe-feature/angular-pipe-feature.component';
import {
  AngularPipeServerComponent
} from './../angular-pipe-server/angular-pipe-server.component';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ShortenPipe
} from 'src/app/share/pipe/shorten.pipe';
import { StatusSortPipePipe } from 'src/app/share/pipe/StatusSortPipe/status-sort-pipe.pipe';
import { ResersePipe } from 'src/app/share/pipe/RevsersePipe/reserse.pipe';


@NgModule({
  declarations: [
    AngularPipeFeatureComponent,
    AngularPipeServerComponent,
    ShortenPipe,
    StatusSortPipePipe,
    ResersePipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    AngularPipeServerComponent,
    AngularPipeFeatureComponent,
    ShortenPipe,
    StatusSortPipePipe,
    ResersePipe,
  ]
})
export class AngularPipeModule {}
