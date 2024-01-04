import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../auth/login/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private urlApi="https://dummyjson.com/users/";

  constructor(private http:HttpClient) { }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.urlApi+id).pipe(
      catchError(this.HandlerError)
    );
  }

  private HandlerError(e:HttpErrorResponse){
    if(e.status==0){
      console.error("Error " + e.error);
    }else{
     console.error("Codigo de estado " + e.status,e.error);
    }
    return throwError(()=>new Error("Algo falló. Intente nuevamente"))
  }
}
