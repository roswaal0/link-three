/**
 * @author Oswaldo Pacheco
 */
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'link-three-mobile-panel-view',
  templateUrl: 'link-three-mobile-panel-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeMobilePanelViewComponent {

  constructor() {
  }
}
