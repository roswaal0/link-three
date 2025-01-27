/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LtDropDownMenuDirective} from './lt-drop-down-menu.directive';
import {LtDropDownToggleDirective} from './lt-drop-down-toggle.directive';
import {LtDropDownDirective} from './lt-drop-down.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LtDropDownDirective,
    LtDropDownMenuDirective,
    LtDropDownToggleDirective
  ],
  declarations: [
    LtDropDownDirective,
    LtDropDownMenuDirective,
    LtDropDownToggleDirective
  ]
})
export class LtDropDownModule {
}
