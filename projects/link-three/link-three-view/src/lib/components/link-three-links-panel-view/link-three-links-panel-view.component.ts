/**
 * @author Oswaldo Pacheco
 */
import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {LinkResponse} from '@link-three/link-three-api';

@Component({
  selector: 'link-three-links-panel-view',
  templateUrl: './link-three-links-panel-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeLinksPanelViewComponent implements AfterViewInit {

  @Input() public links!: LinkResponse[] | null;

  public readonly ADD_LABEL: string = '+ Add new link';
  public readonly DESCRIPTION_EDITOR_LABEL: string = 'Add/edit/remove links below and then share all your profiles with the world!';
  public readonly DESCRIPTION_GUIDE_LABEL: string = `Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!`;
  public readonly SAVE_LABEL: string = 'Save';
  public readonly TITLE_EDITOR_LABEL: string = 'Customize your links';
  public readonly TITLE_GUIDE_LABEL: string = `Let's get you started`;

  constructor() {
  }

  public ngAfterViewInit(): void {
  }
}
