/**
 * @author Oswaldo Pacheco
 */
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {LinkResponse} from '@link-three/link-three-api';

@Component({
  selector: 'link-three-link-view',
  templateUrl: './link-three-link-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeLinkViewComponent {

  @Input() public link!: LinkResponse;

  public readonly LINK_LABEL: string = 'Link';
  public readonly PLATFORM_LABEL: string = 'Platform';
  public readonly REMOVE_LABEL: string = 'Remove';

  constructor() {

  }
}
