import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/post';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string;

  constructor(
    private userSrv: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.userSrv.user === null || this.userSrv.user === undefined){
      const userStr = localStorage.getItem('user');
      if (userStr !== null) {
        console.log(userStr);
        this.userSrv.user = JSON.parse(userStr)
      } else {
        this.router.navigate(['/login'])
      }

    }
  }

  postSchema: Posts = {
    username: '',
    imageURL: '',
    text: '',
    likes: [],
    comment: [{username: '', comment: ''}]
  }

}
