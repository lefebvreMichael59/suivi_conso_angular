import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {Login} from '../model/Login';
import { LoginService } from '../service/login.service';
import {User} from '../model/User';
import {Vehicule} from '../model/Vehicule';
import {VehiculeService} from '../service/vehicule.service';
import {windowWhen} from 'rxjs/operators';
import {ListVehiculeComponent} from '../list-vehicule/list-vehicule.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ////////////////////////////////////////////////////////
  //                      VARIABLES
  ////////////////////////////////////////////////////////
  // contient les valeur de connection
  login = new Login();
  // contient les info de l'utilsateur connecté
  public user = new User();
  // permet l'affichage de la div de connection
  monCompteOver: boolean;
  // permet d'envoyer les vehicules de l'utilisateur au autre components
  @Output() userVehicules = new EventEmitter<Vehicule[]>();

  constructor(public loginService: LoginService,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // envoie de la requete a l'api pour la connection de l'utilsateur
  public async connection(event, login): Promise<void> {
    console.log('avant authenticate');
    await this.loginService.authenticate(login);
    console.log('apres authenticate');
    this.dialogRef.close();
  }

  // Mise a jour de la variable login.username
  public updateLoginUsername(event): void{
    this.login.username = event.target.value;
  }

  // mise à jour de la variable login.password
  public updateLoginPassword(event): void{
    this.login.password = event.target.value;
  }

  // Mise a jour de la variable monCompteOver pour afficher la div
  public updateMonCompteOver(): void{
    this.monCompteOver = true;
  }

  // Mise a jour de la variable monCompteOver pour cacher la div
  public initMonCompteOver(): void{
    this.monCompteOver = false;
  }

  public logout(): void{
    console.log('logout');
    this.loginService.logout();
    // this.listVehicule.userVehicules = [];
  }

  ngOnInit(): void {
  }

}
