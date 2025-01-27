/**
 * @author Oswaldo Pacheco
 */
import {Directive, ElementRef, Host, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {LtDropDownDirective} from './lt-drop-down.directive';

@Directive({
  selector: '[ltDropDownToggle]'
})
export class LtDropDownToggleDirective implements OnInit, OnDestroy {
  @Input() public ssDisabled = false;

  private _contentElement: HTMLElement | undefined;
  private _clickEventSubscription: Subscription;

  private readonly _DISABLED_CLASS: string = 'lt-drop-down-toggle-disabled';
  private readonly _CONTENT_ELEMENT_CLASS: string = 'lt-drop-down-toggle';
  private readonly _CLICK: string = 'click';

  constructor(@Host() private _ssDropDownDirective: LtDropDownDirective,
              private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    this._clickEventSubscription = new Subscription();
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._finalize();
  }

  private _initialize(): void {
    this._build();
    this._listenDropDown();
    this._ssDropDownDirective.dropDownToggleElement = this._elementRef;
  }

  private _finalize(): void {
    this._clickEventSubscription.unsubscribe();
  }

  private _build(): void {
    this._contentElement = this._elementRef.nativeElement as HTMLElement;
    this._renderer.addClass(this._contentElement, this._CONTENT_ELEMENT_CLASS);

    if (this.ssDisabled) {
      this._renderer.addClass(this._contentElement, this._DISABLED_CLASS);
    } else {
      this._renderer.removeClass(this._contentElement, this._DISABLED_CLASS);
    }
  }

  private _listenDropDown(): void {
    const contentElement: HTMLElement = this._getClickElement();
    this._clickEventSubscription = fromEvent(contentElement, this._CLICK)
      .subscribe((event: Event) => {
        event.stopPropagation();
        this._toggle();
      });
  }

  private _getClickElement(): HTMLElement {
    return this._contentElement ? this._contentElement : this._elementRef.nativeElement;
  }

  private _toggle(): void {
    if (!this.ssDisabled) {
      this._ssDropDownDirective.toggle();
    }
  }
}
