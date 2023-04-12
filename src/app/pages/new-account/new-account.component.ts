import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(private fb: FormBuilder, private userSrv: UserService) {}

  ngOnInit(): void {}

  newAccountForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  createAccount(){
    this.userSrv.createNewUser(this.newAccountForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err)=> {
        console.log(err);
      }
    )
  }
}
