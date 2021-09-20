import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {Subscription} from 'rxjs';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor( private loginService: LoginService) {
   this.currentUserSubscription = this.loginService.currentUser.subscribe(user => {
     this.currentUser = user;
   });
  }

  ngOnInit(): void {
  }


}
