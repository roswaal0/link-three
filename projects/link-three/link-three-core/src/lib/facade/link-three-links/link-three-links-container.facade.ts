/**
 * @author Oswaldo Pacheco
 */
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable()
export class LinkThreeLinksContainerFacade {

  constructor(private readonly _store: Store) {
  }
}
