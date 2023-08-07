import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.productoURL;  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL+'listar');
  }

  public detail(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL+`listar/${id}`);
  }

  public detailName(nombre: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL+`lista/${nombre}`);
  }

  public save(producto:Producto): Observable<any>{
    return this.httpClient.post<any>(this.productoURL+'nuevo',producto);
  }
  public update(id:number, producto:Producto): Observable<any>{
    return this.httpClient.put<any>(this.productoURL+`editar/${id}`,producto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productoURL+`delete/${id}`);
  }
}

