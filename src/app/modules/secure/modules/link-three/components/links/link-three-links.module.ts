/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeLinksPanelModule} from '@link-three/link-three';
import {LinkThreeLinksComponent} from './link-three-links.component';

@NgModule({
  imports: [
    CommonModule,
    /**
     * Link-Three
     */
    LinkThreeLinksPanelModule
  ],
  exports: [
    LinkThreeLinksComponent
  ],
  declarations: [
    LinkThreeLinksComponent
  ]
})
export class LinkThreeLinksModule {
}
