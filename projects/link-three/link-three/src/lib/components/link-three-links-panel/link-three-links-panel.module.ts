/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeLinksPanelContainerModule} from '@link-three-core';
import {LinkThreeLinksPanelViewModule} from '@link-three-view';
import {ReactiveComponentModule} from '@ngrx/component';
import {LinkThreeLinksPanelComponent} from './link-three-links-panel.component';

@NgModule({
  imports: [
    LinkThreeLinksPanelContainerModule,
    LinkThreeLinksPanelViewModule,
    CommonModule,
    ReactiveComponentModule,
  ],
  declarations: [
    LinkThreeLinksPanelComponent
  ],
  exports: [
    LinkThreeLinksPanelComponent
  ]
})
export class LinkThreeLinksPanelModule {
}
