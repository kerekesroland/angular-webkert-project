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
  ngOnInit(): void {
    this.auth.isUserLoggedIn().subscribe(
      (user) => {
        console.log(user);
        this.loggedInUser = user;
      },
      (err) => {
        console.error(err);
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
  }
}
