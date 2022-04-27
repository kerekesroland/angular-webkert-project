import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../models/User';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  constructor(
    private location: Location,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService
      .signup(
        this.signUpForm.get('email')?.value,
        this.signUpForm.get('password')?.value
      )
      .then((cred) => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value,
        };
        this.userService
          .create(user)
          .then((_) => {
            console.log('User added successfully.');
            this.authService.logout();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goBack() {
    this.location.back();
  }
}
