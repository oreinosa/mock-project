import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: "signup", component: SignupComponent, canActivate: [NoAuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
  