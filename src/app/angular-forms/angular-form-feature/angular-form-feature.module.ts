import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormsComponent } from '../angular-forms/angular-forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AngularFormsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[],
  exports:[AngularFormsComponent]
})
export class AngularFormFeatureModule { }
