export interface Notification {
  title?: string;
  body?: string;
  type?: string;
  icon?: string;
}
export class Notification {
  constructor(
    public title?: string,
    public body?: string,
    public type?: string,
    public icon?: string,
  ) {
    switch (type) {
      case "info":
        this.icon = "info";
        break;
      case "success":
        this.icon = "done";
        break;
      case "danger":
        this.icon = "cancel";
        break;
      case "warning":
        this.icon = "warning";
        break;
      default:
        this.icon = "help";
    }
  }
}
