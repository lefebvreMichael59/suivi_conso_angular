import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Login} from '../model/Login';
import {HTTP_OPTIONS} from './OptionHttp';
import {Vehicule} from '../model/Vehicule';
import {VehiculeService} from './vehicule.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: User;
  public isAuth: boolean;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public userCars = [Vehicule];

  constructor(private http: HttpClient, private vehiculeService: VehiculeService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // url de la requete
  url = 'http://localhost:8081/authenticate';

  getUser(login: Login): Observable<User>{
    return this.http.post<User>(this.url, login, HTTP_OPTIONS);
  }

  public async authenticate(login): Promise<boolean> {
    try {
      (this.getUser(login)).subscribe(user => {
        const token = user.token;
        sessionStorage.setItem('username', user.name);
        sessionStorage.setItem('role', user.role);
        sessionStorage.setItem('token', token);
        this.user = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        sessionStorage.setItem('userIsAuth', 'true');
        return true;
      });
    }catch (e){
      sessionStorage.setItem('userIsAuth', 'false');
      return false;
    }
  }

  public isUserLoggedIn(): any {
    return (!(this.user));
  }

  public isUserAuth(): boolean{
    return this.isAuth;
  }

  public logout(): void{
    console.log('dans logout');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('token');
    this.user = null;
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
