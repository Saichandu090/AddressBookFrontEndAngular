import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILoginUser, IRegisterUser, LoginResponse } from '../model/UserDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'http://localhost:8080/userDetails/';

  private http = inject(HttpClient);

  register(obj: IRegisterUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'register', obj);
  }

  login(obj: ILoginUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'login', obj);
  }
}
