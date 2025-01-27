/**
 * @author Oswaldo Pacheco
 */
import {Routes} from '@angular/router';
import {AuthenticatedGuardService} from '../../../bootstrap/security/authenticated-guard.service';
import {AppPublicComponent} from '../app-public.component';
import {AppPublicLoginComponent} from '../components/login/app-public-login.component';

export const APP_PUBLIC_ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: AppPublicComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: AppPublicLoginComponent,
        canActivate: [AuthenticatedGuardService]
      }
    ]
  }
];
