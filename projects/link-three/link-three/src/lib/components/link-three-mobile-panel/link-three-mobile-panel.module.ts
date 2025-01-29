/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeMobilePanelContainerModule} from '@link-three/link-three-core';
import {LinkThreeMobilePanelViewModule} from '@link-three/link-three-view';
import {ReactiveComponentModule} from '@ngrx/component';
import {LinkThreeMobilePanelComponent} from './link-three-mobile-panel.component';

@NgModule({
  imports: [
    LinkThreeMobilePanelContainerModule,
    LinkThreeMobilePanelViewModule,
    CommonModule,
    ReactiveComponentModule,
  ],
  declarations: [
    LinkThreeMobilePanelComponent
  ],
  exports: [
    LinkThreeMobilePanelComponent
  ]
})
export class LinkThreeMobilePanelModule {
}
