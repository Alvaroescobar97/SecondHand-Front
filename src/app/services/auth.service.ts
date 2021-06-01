import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Global} from './global';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = Global.url;
  }

  login(email: string, password: string): Promise<any>{
    const body = { email, password};
    return this.httpClient.post<any>(this.url+'signIn',body).toPromise();
  }

  singup(name: string, email: string, password: string): Promise<any>{
    const body = {name, email, password};
    return this.httpClient.post<any>(this.url+'signUp', body).toPromise();
  }
}
