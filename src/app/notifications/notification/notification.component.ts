import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from './notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;
  @Output('close') closeEmitter = new EventEmitter<Notification>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeEmitter.emit(this.notification);
  }

}
