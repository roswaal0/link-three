/**
 * @author Oswaldo Pacheco
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: 'app-preview.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppPreviewComponent {

  public readonly BACK_LABEL: string = 'Back to Editor';
  public readonly SHARE_LINK_LABEL: string = 'Share Link';

  private readonly _SECURE_EDITOR: string = '/secure/editor';

  constructor(private _router: Router) {
  }

  public navigateEditor() {
    this._router.navigate([this._SECURE_EDITOR]);
  }
}
