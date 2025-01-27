/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PREVIEW_ROUTES_CONFIG} from './app-preview-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PREVIEW_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class AppPreviewRoutingModule {
}
