import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/User';
import {Vehicule} from '../model/Vehicule';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {FormSignUpComponent} from '../form-sign-up/form-sign-up.component';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ///////////////////////////////////////////////
  //              VARIABLES
  ///////////////////////////////////////////////
  @Output() userVehicules = new EventEmitter<Vehicule[]>();

  public username = sessionStorage.getItem('username');
  public userIsAuth = sessionStorage.getItem('userIsAuth');

  constructor(public dialog: MatDialog, public header: HeaderComponent) { }

  public setUserVehicules(vehicules): void{
    this.userVehicules.emit(vehicules);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


  openSignUp(): void {
    const dialogRef = this.dialog.open(FormSignUpComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  logOut(): void{
    this.header.loginService.logout();
    sessionStorage.setItem('userIsAuth', 'false');
  }
}
