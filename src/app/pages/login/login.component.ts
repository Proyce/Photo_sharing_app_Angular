import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userSrv: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    this.userSrv.getUser(this.loginForm.value.email).subscribe(
      (res: any) => {
        console.log(res);
        if (!res.length) {
          console.log('Account does not exist');
          this.snackBar.open('Account does not exist', 'ok')
        }

        if (res[0].password === this.loginForm.value.password) {
          console.log('matched');
          this.snackBar.open('Login successful', 'ok');
          this.userSrv.user = res[0];
          console.log(res[0]);

          localStorage.setItem('user', JSON.stringify(res[0]));
          this.router.navigate(['/home'])
        } else {
          console.log('Incorrect password');
          this.snackBar.open('Incorrect password', 'ok')
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
