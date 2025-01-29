/**
 * @author Oswaldo Pacheco
 */
import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LinkResponse} from '@link-three/link-three-api';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'link-three-links-panel-container',
  templateUrl: './link-three-links-panel-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeLinksPanelContainerComponent implements OnInit {

  public links$!: Observable<LinkResponse[]>;

  constructor() {
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.links$ = of([
      {
        ...new LinkResponse(),
        link: 'google.com',
        linkId: '123',
        platform: 'google',
        userId: 'ozzy'
      }
    ]);
  }
}
