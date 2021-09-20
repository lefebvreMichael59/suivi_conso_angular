import { Injectable } from '@angular/core';
import { Vehicule} from '../model/Vehicule';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: undefined
})
export class VehiculeService {
  // cette classe permet d'envoyer la requête a l'api, on y defini l'url et le HttpClient

  // url de la requete get, on récupère tous les vehicules
  url = 'http://localhost:8081/vehicules';
  urlVehiculeByUser = 'http://localhost:8081/vehicules/username/';

  // contructeur : on créer non HttpClient
    constructor(private http: HttpClient) {
  }

  // Methole get all pour récupérer tous les véhicules
  getAll(): Observable<Array<Vehicule>>{
      return this.http.get<Array<Vehicule>>(this.url);
  }

  public async getVehiculeByUsername(user: User): Promise<Observable<Array<Vehicule>>>{
    console.log('methode get vehicule by user');
    const head = new HttpHeaders().append('x-auth-token', user.token);
    return this.http.get<Array<Vehicule>>(this.urlVehiculeByUser + user.name, {headers : head});
  }

}
