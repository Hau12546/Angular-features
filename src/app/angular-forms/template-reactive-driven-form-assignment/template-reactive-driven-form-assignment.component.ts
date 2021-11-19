import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-template-reactive-driven-form-assignment',
  templateUrl: './template-reactive-driven-form-assignment.component.html',
  styleUrls: ['./template-reactive-driven-form-assignment.component.css']
})
export class TemplateReactiveDrivenFormAssignmentComponent implements OnInit {
  InvalidProjectName:string[] = ['Test'];
  InvalidProjectEmail:string[] = ['@123',];
  ProjectStatusList: string[] = ['Stable', 'Critical', 'Finished'];
  ProjectTemplate: FormGroup = new FormGroup({});
  CreatedProject:{name?:string, email?:string, status?:string} = {};
  ProjectToggle:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.InitialForm();
  }

  InitialForm() {
    this.ProjectTemplate = new FormGroup({
      'projectInfo': new FormGroup ({
        'projectName': new FormControl('AAA', [Validators.required, this.ConstraintName(this.InvalidProjectName)], []),
        'projectEmail': new FormControl('AAA@gmail.com', [Validators.required], [this.ConstraintEmail(this.InvalidProjectEmail)])
      }),
      'projectStatus': new FormControl('Stable',[Validators.required],[])
    });
  };

  ConstraintName(list:string[]=  []){
      return (control:AbstractControl):ValidationErrors | null=>{
        console.log(control)
        if(list.indexOf(control.value)>-1){
          return {'IncorrectName': true}
        }
        return null;
      };
  };

  ConstraintEmail(list:string[]=[]){
    return (control:AbstractControl):Observable<ValidationErrors|null>|Promise<ValidationErrors|null>=>{
      const AsyncEmailValidator:Observable<ValidationErrors|null>|Promise<ValidationErrors|null> = new Observable((observer)=>{
        setTimeout(() => {
          if(list.indexOf(control.value)>-1){
            observer.next({'IncorrectEmail': true});
          }
          observer.next(null);
        }, 1000);
      });
      return AsyncEmailValidator.pipe(first());
    }
  }

  OnSubmit(){
    console.log(this.ProjectToggle, this.ProjectTemplate.valid, this.ProjectTemplate)
    this.CreatedProject.name = this.ProjectTemplate.get('projectInfo.projectName')?.value;
    this.CreatedProject.email = this.ProjectTemplate.get('projectInfo.projectEmail')?.value;
    this.CreatedProject.status = this.ProjectTemplate.get('projectStatus')?.value;
    if(this.ProjectTemplate.valid)
    {
      this.ProjectToggle = true;
      return;
    }
    this.ProjectToggle = false;
  }

}
