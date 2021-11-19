import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormsComponent } from '../angular-forms/angular-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormAssignmentComponent } from '../template-driven-form-assignment/template-driven-form-assignment.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { TemplateReactiveDrivenFormAssignmentComponent } from '../template-reactive-driven-form-assignment/template-reactive-driven-form-assignment.component';



@NgModule({
  declarations: [
    AngularFormsComponent,
    TemplateDrivenFormAssignmentComponent,
    ReactiveFormComponent,
    TemplateReactiveDrivenFormAssignmentComponent
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
    ReactiveFormComponent,
    TemplateReactiveDrivenFormAssignmentComponent
  ]
})
export class AngularFormFeatureModule { }
