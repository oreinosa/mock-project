import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Notification } from './notification/notification';

@Injectable()
export class NotificationsService {
  private notificationsSubject: BehaviorSubject<Notification[]> = new BehaviorSubject([]);
  private _notifications = [];
  constructor() {
    // this.notify("testing the info", "info");
    // this.notify("testing the success", "success");
    // this.notify("testing the danger", "danger");
    // this.notify("testing the warning", "warning");
  }

  get notifications(): Observable<Notification[]> {
    return this.notificationsSubject.asObservable();
  }

  public notify(body: string, type: string, title: string = "Notification", duration: number = 2500) {
    const notification = new Notification(title, body, type);
    this.addNotification(notification);
    // console.log('Added ', notification);
    setTimeout(() => {
      this.removeNotification(notification);
      // console.log('Removed ', notification);
    }, duration);
  }

  private addNotification(notification: Notification) {
    this._notifications.unshift(notification);
    this.notificationsSubject.next(this._notifications);
  }

  removeNotification(notification: Notification) {
    const index = this._notifications.indexOf(notification);
    // console.log(index);
    if (index >= 0) {
      this._notifications.splice(index, 1);
      this.notificationsSubject.next(this._notifications);
    }

  }
}
