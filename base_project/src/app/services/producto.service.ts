import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto.model';

@Injectable()
export class ProductoService {
  constructor(private http: HttpClient) {}
  getProductoData() : Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.API_URL + 'producto');
  }


  getProductoId(id :number) : Observable<Producto> {
    return this.http.get<Producto>(environment.API_URL + 'producto/'+id);
  }
}
