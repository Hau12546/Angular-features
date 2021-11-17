import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  GenderList: string[] = ['Male', 'Female'];
  constructor() {}
  UserForm = new FormGroup({});
  ngOnInit(): void {
    this.InitializeForm();
  }

  InitializeForm() {
    this.UserForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl('UserName', [Validators.required], []),
        'useremail': new FormControl('ABC@.com.country', [Validators.required, Validators.email], []),
      }),
      'usergender': new FormControl('Male', [], []),
      'hobbies': new FormArray([])
    });
  }
  // Good to remember how to create custom form control
  CreateCustomFormControl() {
    const controls = new FormControl('Your hobby', [Validators.required]);
    ( < FormArray > this.UserForm.get('hobbies')).push(controls);
  }
  // Good to remember how to create custom form control
  GetFormArray() {
    return (this.UserForm.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.UserForm.value);
  }

}
