import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appName = environment.appName;
  login = new Login();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then();
  }

}
