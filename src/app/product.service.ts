import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://192.168.42.225:9890/products"
  constructor(private http:HttpClient) { }
  getproducts()
  {
    return this.http.get(this.url);
  }
 
}
