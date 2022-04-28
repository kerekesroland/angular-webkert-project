import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  loggedInUser?: firebase.default.User | null;
  isAdminUser?: firebase.default.User | null;
  ngOnInit(): void {
    this.auth.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        if (this.loggedInUser?.email === 'admin@admin.com') {
          this.isAdminUser = this.loggedInUser;
          localStorage.setItem('admin', JSON.stringify(this.isAdminUser));
        }
      },
      (err) => {
        console.error(err);
        localStorage.setItem('user', JSON.stringify('null'));
      }
    );
  }

  logout() {
    this.auth
      .logout()
      .then(() => {
        console.log('logged out');
      })
      .catch((err) => {
        console.error(err);
      });
    localStorage.removeItem('admin');
    window.location.reload();
  }
}
