/**
 * @author Oswaldo Pacheco
 */
import {animate, AnimationTriggerMetadata, keyframes, style, transition, trigger} from '@angular/animations';

export const INVALID_DATA: AnimationTriggerMetadata = trigger('invalidData', [
  transition('false => true', animate('0.5s', keyframes([
    style({color: 'red', marginLeft: '0', offset: 0}),
    style({color: 'red', marginLeft: '0.5rem', offset: 0.25}),
    style({color: 'red', marginLeft: '-0.5rem', offset: 0.45}),
    style({color: 'red', marginLeft: '0.5rem', offset: 0.65}),
    style({color: 'red', marginLeft: '-0.5rem', offset: 0.85}),
    style({color: '*', marginLeft: '0', offset: 1})
  ])))
]);
