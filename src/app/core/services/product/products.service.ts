import { Injectable } from '@angular/core';
import { Product } from '../../model/products.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>( environment.api_products );
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.api_products}${id}`);
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(`${environment.api_products}`, product );
  }

  update(id: string , changes: Partial<Product>): Observable<Product>{
    return this.http.put<Product>(`${environment.api_products}${id}`, changes);
  }

  delete(id: string): Observable<boolean>{
    return this.http.delete<boolean>(`${environment.api_products}${id}`);
  }
}
