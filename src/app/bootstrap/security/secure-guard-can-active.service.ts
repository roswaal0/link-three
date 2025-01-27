/**
 * @author Oswaldo Pacheco
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class SecureGuardCanActiveService implements CanActivate {

  private readonly _PATH_SECURE: string = 'secure';
  private readonly _PUBLIC_LOGIN_PATH: string = '/public/login';

  constructor(private _router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this._isSecureRoute(route) && !this._isUserId()) {
      this._redirectToLogin();

      return false;
    }

    return true;
  }

  private _isSecureRoute(route: ActivatedRouteSnapshot): boolean {
    return !!(route.routeConfig && route.routeConfig.path === this._PATH_SECURE);
  }

  private _isUserId(): boolean {
    return true;
  }

  private _redirectToLogin(): void {
    this._router.navigate([this._PUBLIC_LOGIN_PATH]);
  }
}
