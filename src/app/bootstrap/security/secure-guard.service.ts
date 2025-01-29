/**
 * @author Oswaldo Pacheco
 */
import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable()
export class SecureGuardService implements CanLoad {

  private readonly _LINK_THREE_TOKEN_SESSION: string = 'LINK_THREE_TOKEN_SESSION';
  private readonly _PUBLIC_LOGIN_PATH: string = '/public/login';

  constructor(private _router: Router) {
  }

  public canLoad(): boolean {
    let isUserActive = true;

    if (!localStorage.getItem(this._LINK_THREE_TOKEN_SESSION)) {
      this._router.navigate([this._PUBLIC_LOGIN_PATH]);
    }

    return isUserActive;
  }
}
