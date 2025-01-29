/**
 * @author Oswaldo Pacheco
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthenticatedGuardService implements CanActivate {

  private readonly _LINK_THREE_TOKEN_SESSION: string = 'LINK_THREE_TOKEN_SESSION';
  private readonly _SECURE_PATH: string = '/secure';

  constructor(private _router: Router) {
  }

  public canActivate(): boolean {

    if (!!localStorage.getItem(this._LINK_THREE_TOKEN_SESSION)) {
      this._router.navigate([this._SECURE_PATH]);
    }

    return true;
  }
}
