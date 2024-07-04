import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formGroup: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.min(8)]);


  constructor(private loginFormBuilder: FormBuilder) {
    this.formGroup = this.loginFormBuilder.group({
      email: '',
      password: ''
    });
  }

  public onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      console.log('Valid Email and Password')
    }
  }
}
