import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { Link } from 'src/app/shared/models/link';
import { User } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material';
import { LogoutComponent } from 'src/app/auth/logout/logout.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  appName = environment.appName;
  user: User;
  links: Link[] = [];
  actions: Link[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.authService.links
      .subscribe(links => this.links = links);

    this.authService.actions
      .subscribe(actions => this.actions = actions);

    this.authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    let ref = this.dialog.open(LogoutComponent);
  }

}
