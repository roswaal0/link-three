/**
 * @author Oswaldo Pacheco
 */
import {Routes} from '@angular/router';
import {SecureGuardCanActiveService} from '../bootstrap/security/secure-guard-can-active.service';
import {SecureGuardService} from '../bootstrap/security/secure-guard.service';

export const APP_ROUTES_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    loadChildren: () => import('../modules/public/app-public.module').then(module => module.AppPublicModule)
  },
  {
    path: 'secure',
    loadChildren: () => import('../modules/secure/app-secure.module').then(module => module.AppSecureModule),
    canActivate: [SecureGuardCanActiveService],
    canLoad: [SecureGuardService]
  },
  {
    path: '**',
    redirectTo: 'secure',
    pathMatch: 'full'
  }
];
