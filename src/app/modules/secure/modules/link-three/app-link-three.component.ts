/**
 * @author Oswaldo Pacheco
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-link-three',
  templateUrl: './app-link-three.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppLinkThreeComponent {

  public isLinksActive!: boolean;

  public readonly LINKS_LABEL: string = 'Links';
  public readonly LOGOUT_LABEL: string = 'Logout';
  public readonly PREVIEW_LABEL: string = 'Preview';
  public readonly PROFILE_LABEL: string = 'Profile Details';

  private readonly _LINK_THREE_TOKEN_SESSION: string = 'LINK_THREE_TOKEN_SESSION';
  private readonly _PUBLIC_LOGIN_PATH: string = '/public/login';
  private readonly _SECURE_EDITOR_LINKS: string = '/secure/editor/links';
  private readonly _SECURE_EDITOR_PROFILE: string = '/secure/editor/profile';
  private readonly _SECURE_PREVIEW: string = '/secure/preview';

  constructor(private _router: Router) {
    this.isLinksActive = true;
  }

  public navigateLinks() {
    this.isLinksActive = true;

    this._router.navigate([this._SECURE_EDITOR_LINKS]);
  }

  public navigateProfile() {
    this.isLinksActive = false;

    this._router.navigate([this._SECURE_EDITOR_PROFILE]);
  }

  public navigatePreview() {
    this.isLinksActive = false;

    this._router.navigate([this._SECURE_PREVIEW]);
  }

  public logout(): void {
    localStorage.removeItem(this._LINK_THREE_TOKEN_SESSION);

    this._router.navigate([this._PUBLIC_LOGIN_PATH]);
  }
}
