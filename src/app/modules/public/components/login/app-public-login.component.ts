/**
 * @author Oswaldo Pacheco
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {INVALID_DATA} from '../../../../commons/animations/invalid-data-animation';

@Component({
  selector: 'app-public-login',
  templateUrl: './app-public-login.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [INVALID_DATA]
})
export class AppPublicLoginComponent {

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

  private readonly _LINK_THREE_TOKEN_SESSION: string = 'LINK_THREE_TOKEN_SESSION';
  private readonly _PATH_SECURE: string = '/secure';

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) {

    this.loginForm = this._formBuilder.group({
      email: [this.EMPTY, Validators.required],
      password: [this.EMPTY, Validators.required]
    });
    this.isInvalidLogin = false;
    this.isLoginForm = false;
  }

  public login(): void {
    localStorage.setItem(this._LINK_THREE_TOKEN_SESSION, this.generateTokenSession());

    this._router.navigateByUrl(this._PATH_SECURE);
  }

  private generateTokenSession(): string {
    return Math.random().toString(36).substr(2);
  };
}
