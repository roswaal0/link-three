/**
 * @author Oswaldo Pacheco
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeLinksPanelModule, LinkThreeMobilePanelModule} from '@link-three/link-three';
import {AppLinkThreeComponent} from './app-link-three.component';
import {LinkThreeLinksModule} from './components/links/link-three-links.module';
import {AppLinkThreeRoutingModule} from './link-three-routes/app-link-three-routing.module';

@NgModule({
  imports: [
    AppLinkThreeRoutingModule,
    /**
     * Link-Three
     */
    LinkThreeLinksPanelModule,
    LinkThreeMobilePanelModule,
    LinkThreeLinksModule,
    CommonModule
  ],
  exports: [
    AppLinkThreeComponent
  ],
  declarations: [
    AppLinkThreeComponent
  ]
})
export class AppLinkThreeModule {
}
