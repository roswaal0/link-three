import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LinkThreeModule} from 'link-three';
import {LinkThreeApiModule} from 'link-three-api';
import {LinkThreeCoreModule} from 'link-three-core';
import {LinkThreeViewModule} from 'link-three-view';

import { AppComponent } from './app.component';
import {SecureGuardCanActiveService} from './bootstrap/security/secure-guard-can-active.service';
import {SecureGuardService} from './bootstrap/security/secure-guard.service';
import {AppRoutingModule} from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    /** LT Modules **/
    LinkThreeModule,
    LinkThreeApiModule,
    LinkThreeCoreModule,
    LinkThreeViewModule
  ],
  providers: [
    SecureGuardCanActiveService,
    SecureGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
