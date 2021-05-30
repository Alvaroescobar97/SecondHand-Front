import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = Global.url;
  }

  login(): Promise<any>{
    return this.httpClient.get<any>(this.url+'signIn').toPromise();
  }

  singup(name: string, email: string, password: string): Promise<any>{
    const body = {name, email, password};
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.url+'signUp', body, {headers}).toPromise();
  }

}
