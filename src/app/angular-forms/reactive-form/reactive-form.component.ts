import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  GenderList: string[] = ['Male', 'Female','Unknown'];
  InvalidGender:string[] = ['Unknown'];
  InvalidEmail:string[] = ['ABC@.com.country'];
  constructor() {}
  UserForm = new FormGroup({});
  ngOnInit(): void {
    this.InitializeForm();
    //Listen to when value is changing
    this.UserForm.valueChanges.subscribe((value:string)=>{
      console.log(value);
    });
    //Listen to when status of asyn is changing
    this.UserForm.statusChanges.subscribe((value:string)=>{
      console.log(value);
    });

    this.SetInitialValue();
  };

  InitializeForm() {
    this.UserForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl('UserName', [Validators.required], []),
        'useremail': new FormControl('ABC@.com.country', [], [this.EmailValidator(this.InvalidEmail)]),
      }),
      'usergender': new FormControl('Male', [this.GenderValidator(this.InvalidGender)], []),
      'hobbies': new FormArray([])
    });
  };
  // Good to remember how to create custom form control
  CreateCustomFormControl() {
    const controls = new FormControl('Your hobby', [Validators.required]);
    ( < FormArray > this.UserForm.get('hobbies')).push(controls);
  };
  // Good to remember how to create custom form control
  GetFormArray() {
    return (this.UserForm.get('hobbies') as FormArray).controls;
  };
  //Custom validator  synchronous
  GenderValidator(list:string[] = []){
    return (control:AbstractControl):ValidationErrors|null=>{
      if(list.indexOf(control.value)>-1)
      {
        return  {'InvalidGender': true};
      }
      return null;};
  };

  //Custom validator  asynchronous
  EmailValidator(list:string[] = []){
     return (control:AbstractControl):Observable<ValidationErrors | null>=>{
      const ValidEmail:Observable<ValidationErrors | null> = new Observable((observer)=>{
        setTimeout(() => {
          if(list.indexOf(control.value)>-1){
            observer.next({'InvalidEmail':true});
            console.log(control);
         }else{
           observer.next(null);
         }
        }, 1000);
      });
      return ValidEmail.pipe(first());
     };
  };

  SetInitialValue(name:string='max',email:string='MaxMax1996@gmail.com',gender:string='Male',hobby:string='Racing'){
    this.UserForm.setValue({
      'userdata':{
        'username':name,
        'useremail':email
      },
      'usergender': gender,
      'hobbies': []
    });
  }

  PatchInitialValue(name:string='max',email:string='MaxMax1996@gmail.com',gender:string='Male',hobby:string='Racing'){
    this.UserForm.patchValue({
      'userdata':{
        'username':name,
        'useremail':email
      },
      'usergender': gender,
    });
  }


  onSubmit() {
    console.log(this.UserForm.get('userdata.useremail'));
    this.PatchInitialValue();
  };



}
