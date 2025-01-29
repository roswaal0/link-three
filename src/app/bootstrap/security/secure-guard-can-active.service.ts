/**
 * @author Oswaldo Pacheco
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class SecureGuardCanActiveService implements CanActivate {

  private readonly _LINK_THREE_TOKEN_SESSION: string = 'LINK_THREE_TOKEN_SESSION';
  private readonly _PUBLIC_LOGIN_PATH: string = '/public/login';

  constructor(private _router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem(this._LINK_THREE_TOKEN_SESSION)) {
      this._redirectToLogin();

      return false;
    }

    return true;
  }

  private _redirectToLogin(): void {
    this._router.navigate([this._PUBLIC_LOGIN_PATH]);
  }
}
