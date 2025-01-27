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

  public readonly LINKS_LABEL: string = 'Links';
  public readonly PREVIEW_LABEL: string = 'Preview';
  public readonly PROFILE_LABEL: string = 'Profile Details';

  private readonly _SECURE_PREVIEW: string = '/secure/preview';
  private readonly _SECURE_EDITOR_LINKS: string = '/secure/editor/links';
  private readonly _SECURE_EDITOR_PROFILE: string = '/secure/editor/profile';

  constructor(private _router: Router) {
  }

  public navigateLinks() {
    this._router.navigate([this._SECURE_EDITOR_LINKS]);
  }

  public navigateProfile() {
    this._router.navigate([this._SECURE_EDITOR_PROFILE]);
  }

  public navigatePreview() {
    this._router.navigate([this._SECURE_PREVIEW]);
  }
}
