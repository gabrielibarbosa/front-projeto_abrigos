import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Doador } from '../model/doador';
import { Abrigo } from '../model/abrigo';
import { Post } from '../model/post';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  loginUsers(data): Observable<Usuario>{
    return this.httpClient.post<Usuario>(API_URL+"/login", data)
    .pipe(
      tap(res => {
      return res;
      })
    );
  }
  getDoador (): Observable<Doador[]> {
    return this.httpClient.get<Doador[]>(API_URL+"/doador/listar")
      .pipe(
        tap(res => {
        return res;
        })
      );
  }
  postDoador(data): Observable<Doador> {
    return this.httpClient.post<Doador>(API_URL+"/doador/", data)
      .pipe(
        tap((doador) => console.log("Doador adicionado com sucesso"+doador)),
        catchError(this.handleError<Doador>('addAluno'))
      );
  }
  getAbrigo (): Observable<Abrigo[]> {
    return this.httpClient.get<Abrigo[]>(API_URL+"/abrigo/listar")
      .pipe(
        tap(res => {
        return res;
        })
      );
  }
  postAbrigo(data): Observable<Abrigo> {
    return this.httpClient.post<Abrigo>(API_URL+"/abrigo/", data)
      .pipe(
        tap((abrigo) => console.log("Abrigo adicionado com sucesso"+abrigo)),
        catchError(this.handleError<Abrigo>('addAluno'))
      );
  }

  getPost (): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL+"/post/listar")
      .pipe(
        tap(res => {
        return res;
        })
      );
  }
  postPost(data): Observable<Post> {
    return this.httpClient.post<Post>(API_URL+"/post/", data)
      .pipe(
        tap((post) => console.log("Post adicionado com sucesso"+post)),
        catchError(this.handleError<Post>('addAluno'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return error;
    };
  }
}
