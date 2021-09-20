import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public username = sessionStorage.getItem('username');
  public userIsAuth = sessionStorage.getItem('userIsAuth');

  constructor(public loginService: LoginService, ) {
    console.log('test');
  }

  ngOnInit(): void {
  }

  public logout(): void{
    this.loginService.logout();
  }

}
