import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getClothesForSaleByUser(): Promise<any>{
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    return this.httpClient.get<any>(this.url+'clothes/onSale',{headers}).toPromise();
  }

  createClothe(reference: string, size: string, price: number, description : string, color: Array<string>): Promise<any>{
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    let body = {reference,size,price,description,color};
    return this.httpClient.post<any>(this.url+'clothes/create', body, {headers}).toPromise();
  }

  updateClothe(id:any, reference: string, size: string, price: number, description : string, color: Array<string>): Promise<any>{
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    let body = {reference,size,price,description,color};
    return this.httpClient.put<any>(this.url+'clothes/'+id, body, {headers}).toPromise();
  }

  deleteClothe(id:any): Promise<any>{
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    return this.httpClient.delete<any>(this.url+'clothes/'+id,{headers}).toPromise();
  }

  upload(id:any,files:any): Promise<any>{
    const formData: FormData = new FormData();
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formData.append(""+index, files[index]);
      
    }
    formData.append('files', files);
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    return this.httpClient.post<any>(this.url+'clothes/upload-images/'+id,formData,{headers}).toPromise();
  }

  getImages(id:any){
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem("token")||'');
    return this.httpClient.get<any>(this.url+'clothes/get-images/'+id,{headers}).toPromise();
  }

  getClotheById(id:any){
    return this.httpClient.get<any>(this.url+'clothes/'+id).toPromise();
  }
}
