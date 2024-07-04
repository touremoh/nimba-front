import {Component, EventEmitter, Output} from '@angular/core';
import {LoginPageComponent} from "../../../pages/login/login-page/login-page.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends LoginPageComponent {
}
