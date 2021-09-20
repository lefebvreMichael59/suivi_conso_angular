import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Login} from '../model/Login';
import {HTTP_OPTIONS} from './OptionHttp';
import {UserSignUp} from '../model/UserSignUp';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  // url de la requete
  url = 'http://localhost:8081/signup';

  signup(userSignuUp: UserSignUp): Observable<UserSignUp>{
    return this.http.post<UserSignUp>(this.url, userSignuUp, HTTP_OPTIONS);
  }

  public async createUser(userSignUp: UserSignUp): Promise<boolean> {
    try {
      console.log('in function create user');
      this.signup(userSignUp).subscribe();
    }catch (e){
      return false;
    }
  }

}
