/**
 * @author Oswaldo Pacheco
 */
import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {INVALID_DATA} from '../../../../commons/animations/invalid-data-animation';

@Component({
  selector: 'app-public-sign-up',
  templateUrl: './app-public-sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [INVALID_DATA]
})
export class AppPublicSignUpComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
}
