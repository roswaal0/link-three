/**
 * @author Oswaldo Pacheco
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppPreviewComponent} from './app-preview.component';
import {AppPreviewRoutingModule} from './preview-routes/app-preview-routing.module';

@NgModule({
  imports: [
    AppPreviewRoutingModule,
    /**
     * Link-Three
     */
    CommonModule
  ],
  exports: [
    AppPreviewComponent
  ],
  declarations: [
    AppPreviewComponent
  ]
})
export class AppPreviewModule {
}
