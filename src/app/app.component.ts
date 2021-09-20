import { Component } from '@angular/core';
import {User} from './model/User';
import {Vehicule} from './model/Vehicule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suiviConso';

  public userVehicules: Vehicule[];

  public setUserVehicules(vehicules): void{
    this.userVehicules = vehicules;
  }
}
