import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormsComponent } from '../angular-forms/angular-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormAssignmentComponent } from '../template-driven-form-assignment/template-driven-form-assignment.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AngularFormsComponent,
    TemplateDrivenFormAssignmentComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[],
  exports:[
    AngularFormsComponent,
    TemplateDrivenFormAssignmentComponent,
    ReactiveFormComponent
  ]
})
export class AngularFormFeatureModule { }
