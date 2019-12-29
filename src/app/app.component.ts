import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './shared/models/user';
import { Observable } from 'rxjs';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-bakery';
  user: Observable<User>;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {
    this.user = this.authService.user$;
    // this.themeService.initTheme();
  }
}
