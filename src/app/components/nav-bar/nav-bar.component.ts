import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userSrv.user = null;
    this.router.navigate(['/login'])
  }

}
