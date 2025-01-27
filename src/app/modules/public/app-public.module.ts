/**
 * @author Oswaldo Pacheco
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticatedGuardService} from '../../bootstrap/security/authenticated-guard.service';
import {AppPublicComponent} from './app-public.component';
import {AppPublicLoginComponent} from './components/login/app-public-login.component';
import {AppPublicSignUpComponent} from './components/sign-up/app-public-sign-up.component';
import {AppPublicRoutingModule} from './routes/app-public-routing.module';

@NgModule({
  imports: [
    AppPublicRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppPublicComponent,
    AppPublicLoginComponent,
    AppPublicSignUpComponent
  ],
  providers: [
    AuthenticatedGuardService
  ]
})
export class AppPublicModule {
}
