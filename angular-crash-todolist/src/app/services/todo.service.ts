import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string;
  todosLimit: string;
  httpOptions;

  constructor(private http: HttpClient) {
    this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    this.todosLimit = '?_limit=15';
    this.httpOptions  = { headers: new HttpHeaders({'Content-Type': ''})};
   }

   // get Todos
  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle COmpleted
toggleCompleted(todo: Todo): Observable<any> {
  const url =  `${this.todosUrl}/${todo.id}`;
  return this.http.put(url, todo, this.httpOptions);
}

}
