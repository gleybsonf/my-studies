import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ITodo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ITodo[]>(`${this.baseUrl}todos`).pipe(map((response)=>{
      return response;
    }))
  }


  getById(id: number){
    return this.http.get<ITodo>(`${this.baseUrl}todos/${id}`).pipe(map((response)=>{
      return response;
    }))
  }
}
