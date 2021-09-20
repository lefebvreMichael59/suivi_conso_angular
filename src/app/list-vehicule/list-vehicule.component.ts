import {Component, Input, OnInit} from '@angular/core';
import { Vehicule } from '../model/Vehicule';
import { VehiculeService } from '../service/vehicule.service';
import {User} from '../model/User';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {

  @Input() userVehicules: Vehicule[];
  vehicules: Vehicule[];
  modifVehicule = new Vehicule();

  selectedVehicule: Vehicule;

  // choix du véhicule
  public setSelectedVehicule(event, vehicule): void{
    if (this.modifVehicule.id !== vehicule.id){
      this.modifVehicule = vehicule;
    }
    this.selectedVehicule = vehicule;
  }

  public ajoutPlein(event, vehicule): void{
  }

  public ajoutEntretien(event, vehicule): void{
  }

  public suppressionVehicule(event, vehicule): void{
  }

  // Creation du service pour communiquer avec l'api dans le constructeur
  constructor( private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.selectedVehicule = new Vehicule();
  }

}
