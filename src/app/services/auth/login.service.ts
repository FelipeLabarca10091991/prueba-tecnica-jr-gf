import { Injectable } from '@angular/core';
import { LoginRequest } from '../../auth/login/loginRequestInterface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from '../../auth/login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  flowingDataUser: BehaviorSubject<User> = new BehaviorSubject<User>({id:3,username:""});

  private urlAuth = "https://dummyjson.com/auth/login";


  constructor(private http:HttpClient) { }


login(credentials:LoginRequest):Observable<User>{
  return this.http.post<any>(this.urlAuth,credentials).pipe(
    tap((userData)=>{
      console.log(userData);
      this.flowingDataUser.next(userData);
      this.isLogIn.next(true);
    }),
    //catchError(this.HandlerError)
  );
}

private HandlerError(e:HttpErrorResponse){
  if(e.status==0){
    console.error("Error " + e.error);
  }else{
   console.error("Codigo de estado " + e);
  }
  return throwError(()=>new Error("Algo falló. Intente nuevamente"))
}

get flowingData():Observable<User>{
  return this.flowingDataUser.asObservable();
}

get loginOn():Observable<boolean>{
  return this.isLogIn.asObservable();
}


}
