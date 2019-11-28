import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<LogoutComponent>,
  ) { }

  ngOnInit() {
  }


  onLogout() {
    this.authService.signOut().then(() => this.dialogRef.close());
  }

}
