/**
 * @author Oswaldo Pacheco
 */
import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'link-three-mobile-panel-container',
  templateUrl: './link-three-mobile-panel-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeMobilePanelContainerComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
  }
}
