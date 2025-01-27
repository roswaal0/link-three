/**
 * @author Oswaldo Pacheco
 */
import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {LtDropDownCloseEnum} from './properties/lt-drop-down-close-enum';

@Directive({
  selector: '[ltDropDown]'
})
export class LtDropDownDirective implements OnInit, OnDestroy {
  @Output() public dropDownOpenChange: EventEmitter<boolean>;

  @Input() public autoClose: string;

  private _dropDownToggleElement: ElementRef | undefined;
  private _dropDownMenuElement: ElementRef | undefined;
  private _contentElement: HTMLElement | undefined;
  private _clickEventSubscription: Subscription;
  private _isOpen: boolean;

  private readonly _CONTENT_ELEMENT_CLASS: string = 'lt-drop-down';
  private readonly _OPEN_CLASS: string = 'lt-drop-down-open';
  private readonly _CLICK: string = 'click';

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    this.dropDownOpenChange = new EventEmitter<boolean>();
    this._clickEventSubscription = new Subscription();
    this.autoClose = LtDropDownCloseEnum.ALWAYS;
    this._isOpen = false;
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._finalize();
  }

  public open(): void {
    if (!this._isOpen) {
      this._isOpen = true;
      if (this.autoClose !== LtDropDownCloseEnum.DISABLED) {
        this._listenAutoClose();
      }
      this._renderer.addClass(this._contentElement, this._OPEN_CLASS);
      this.dropDownOpenChange.emit(true);
    }
  }

  public close(): void {
    if (this._isOpen) {
      this._isOpen = false;
      this._renderer.removeClass(this._contentElement, this._OPEN_CLASS);
      this._clickEventSubscription.unsubscribe();
      this.dropDownOpenChange.emit(false);
    }
  }

  public toggle(): void {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public set dropDownToggleElement(dropDownToggleElement: ElementRef) {
    this._dropDownToggleElement = dropDownToggleElement;
  }

  public set dropDownMenuElement(dropDownMenuElement: ElementRef) {
    this._dropDownMenuElement = dropDownMenuElement;
  }

  private _initialize(): void {
    this._build();
  }

  private _finalize(): void {
    this._clickEventSubscription.unsubscribe();

    if (this._dropDownMenuElement) {
      this._dropDownMenuElement.nativeElement.remove();
    }
  }

  private _build(): void {
    this._contentElement = this._elementRef.nativeElement as HTMLElement;
    this._renderer.addClass(this._contentElement, this._CONTENT_ELEMENT_CLASS);
  }

  private _listenAutoClose(): void {
    this._clickEventSubscription = fromEvent(document, this._CLICK)
      .subscribe((event: Event) => {
        this._autoCloseEvent(event as MouseEvent);
      });
  }

  private _autoCloseEvent(event: MouseEvent): void {
    if (event) {
      const targetElement: HTMLElement = event.target as HTMLElement;
      if (this._dropDownToggleElement &&
        this._dropDownToggleElement.nativeElement.contains(targetElement)) {
        return;
      }

      if (this.autoClose === LtDropDownCloseEnum.OUTSIDE &&
        this._dropDownMenuElement &&
        this._dropDownMenuElement.nativeElement.contains(targetElement)) {
        return;
      }
    }
    this.close();
  }
}
