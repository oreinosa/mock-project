import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { NotificationsService } from './notifications.service';



@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    NotificationsComponent
  ],
  providers: [NotificationsService]
})
export class NotificationsModule { }
