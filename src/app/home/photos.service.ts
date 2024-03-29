import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getphotos() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=50');

  }
}
