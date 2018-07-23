import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class InferHttpGetService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Data[]>('api.example.com');
  }
}
