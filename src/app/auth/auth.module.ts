import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, LogoutComponent, ProfileComponent],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  entryComponents: [
    LogoutComponent
  ]
})
export class AuthModule { }
