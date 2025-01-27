/**
 * @author Oswaldo Pacheco
 */
import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {INVALID_DATA} from '../../../../commons/animations/invalid-data-animation';

@Component({
  selector: 'app-public-login',
  templateUrl: './app-public-login.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [INVALID_DATA]
})
export class AppPublicLoginComponent implements AfterViewInit, OnInit {

  public isInvalidLogin: boolean;
  public isLoginForm: boolean;
  public loginForm: FormGroup;

  public readonly CREATE_ACCOUNT_DETAIL_LABEL: string = `Don't have an account?`;
  public readonly CREATE_ACCOUNT_LABEL: string = 'Create account';
  public readonly EMAIL_LABEL: string = 'Email address';
  public readonly EMAIL_PLACEHOLDER: string = 'e.g. alex@email.com';
  public readonly EMPTY: string = '';
  public readonly LOGIN_DETAIL_LABEL: string = 'Add your details below to get back into the app';
  public readonly LOGIN_LABEL: string = 'Login';
  public readonly PASSWORD_LABEL: string = 'Password';
  public readonly PASSWORD_PLACEHOLDER: string = 'Enter your password';

  constructor(private _formBuilder: FormBuilder) {

    this.loginForm = this._formBuilder.group({
      email: [this.EMPTY, Validators.required],
      password: [this.EMPTY, Validators.required]
    });
    this.isInvalidLogin = false;
    this.isLoginForm = false;
  }

  public ngAfterViewInit(): void {
  }

  public ngOnInit(): void {
  }

  public login(): void {
  //logica logueo

  }

  public resetInvalidLogin(): void {
    this.isInvalidLogin = false;
  }

  public navigateLogin(): void {
    this.isLoginForm = false;
  }
}
