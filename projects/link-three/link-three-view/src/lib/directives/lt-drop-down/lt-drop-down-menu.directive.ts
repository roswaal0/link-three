/**
 * @author Oswaldo Pacheco
 */
import {Directive, ElementRef, Host, OnInit, Renderer2} from '@angular/core';
import {LtDropDownDirective} from './lt-drop-down.directive';

@Directive({
  selector: '[ltDropDownMenu]'
})
export class LtDropDownMenuDirective implements OnInit {
  private _contentElement: HTMLElement | undefined;

  private readonly _CONTENT_ELEMENT_CLASS: string = 'lt-drop-down-menu';

  constructor(@Host() private _ssDropDownDirective: LtDropDownDirective,
              private _elementRef: ElementRef,
              private _renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._contentElement = this._elementRef.nativeElement as HTMLElement;
    this._renderer.addClass(this._contentElement, this._CONTENT_ELEMENT_CLASS);
    this._ssDropDownDirective.dropDownMenuElement = this._elementRef;
  }
}
