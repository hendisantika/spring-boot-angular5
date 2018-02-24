import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorDialogComponent} from '../core/error-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['user']);
    } else {
      this.showError('Invalid credentials');
    }
  }

  showError(error: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: {errorMsg: error}, width: '250px'
    });
  }
}
