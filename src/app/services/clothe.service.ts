import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ClotheService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = Global.url;
  }
  

  getAllClothes(): Promise<any>{
    return this.httpClient.get<any>(this.url+'clothes').toPromise();
  }

}
