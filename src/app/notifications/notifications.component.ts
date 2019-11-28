import { Component, OnInit } from '@angular/core';
import { Notification } from './notification/notification';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationsService.notifications.subscribe(notifications => this.notifications = notifications);
  }

  onClose(notification: Notification) {
    this.notificationsService.removeNotification(notification);
  }

}
