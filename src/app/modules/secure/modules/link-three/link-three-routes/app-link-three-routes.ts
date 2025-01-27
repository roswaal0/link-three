/**
 * @author Oswaldo Pacheco Flores
 */
import {Routes} from '@angular/router';
import {AppLinkThreeComponent} from '../app-link-three.component';
import {LinkThreeLinksComponent} from '../components/links/link-three-links.component';
import {LinkThreeProfileComponent} from '../components/profile/link-three-profile.component';

export const LINK_THREE_ROUTES_CONFIG: Routes = [
  {
    path: '', redirectTo: 'links'
  },
  {
    path: '',
    component: AppLinkThreeComponent,
    children: [
      {
        path: 'links',
        component: LinkThreeLinksComponent
      },
      {
        path: 'profile',
        component: LinkThreeProfileComponent
      }
    ]
  }
];
