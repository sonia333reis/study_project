import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';

@Injectable({
  providedIn: 'root' // visto na aplicação toda
})
export class CrudService {

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<any> {
    // observable quer dizer que está sendo feita uma tratativa de dados assíncronos
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
