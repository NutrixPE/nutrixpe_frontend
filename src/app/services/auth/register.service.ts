import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './user';
import { RegisterNutritionistRequest, RegisterUserRequest } from './registerRequest';
import { Nutritionist } from './nutritionist';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ id: 0 });
  currentNutriData: BehaviorSubject<Nutritionist> = new BehaviorSubject<Nutritionist>({ id: 0 });

  constructor(private http: HttpClient) { }

  registerUser(credentials: RegisterUserRequest): Observable<User> {
    console.log(credentials)
    return this.http.post<User>('http://127.0.0.1:8080/user', credentials).pipe(
      tap(userData => {
        console.log(userData)
        this.currentUserData.next(userData);
      }),
      catchError(this.handleError)
    );
  }

  registerNutritionist(credentials: RegisterNutritionistRequest): Observable<Nutritionist> {
    console.log(credentials)
    return this.http.post<Nutritionist>('http://127.0.0.1:8080/nutritionist', credentials).pipe(
      tap(userData => {
        console.log(userData)
        this.currentNutriData.next(userData);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retorno codigo de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente'));
  }

}
