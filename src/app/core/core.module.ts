import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeModule } from '../theme/theme.module';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [HomeComponent, NavigationComponent, AvatarComponent],
  imports: [
    SharedModule,
    ThemeModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
