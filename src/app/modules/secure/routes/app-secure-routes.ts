/**
 * @author Oswaldo Pacheco
 */
import {Routes} from '@angular/router';
import {AppSecureComponent} from '../app-secure.component';

export const APP_SECURE_ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: AppSecureComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'editor'
      },
      {
        path: 'editor',
        loadChildren: () => import('../modules/link-three/app-link-three.module').then(module => module.AppLinkThreeModule)
      },
      {
        path: 'preview',
        loadChildren: () => import('../modules/preview/app-preview.module').then(module => module.AppPreviewModule)
      }
    ]
  }
];
