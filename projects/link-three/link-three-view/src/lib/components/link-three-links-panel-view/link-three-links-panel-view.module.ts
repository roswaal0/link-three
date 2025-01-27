/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LtDropDownModule} from '../../directives/lt-drop-down/lt-drop-down.module';
import {LinkThreeLinkViewComponent} from './link-three-link-view/link-three-link-view.component';
import {LinkThreeLinksPanelViewComponent} from './link-three-links-panel-view.component';

@NgModule({
  imports: [
    CommonModule,
    LtDropDownModule,
  ],
  declarations: [
    LinkThreeLinkViewComponent,
    LinkThreeLinksPanelViewComponent,

  ],
  exports: [
    LinkThreeLinkViewComponent,
    LinkThreeLinksPanelViewComponent,
  ],
  providers: []
})
export class LinkThreeLinksPanelViewModule {
}
