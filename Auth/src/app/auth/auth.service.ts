import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../core/typings/response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }

  private readonly _authStorageToken: string = "authToken";

  isLogin: boolean = false;

  register(user: any): Observable<Response>{
    return this.http.post<Response>("http://localhost:3000/api/auth/register",user)
  }
  login(data: any): Observable<Response>{
    return this.http.post<Response>("http://localhost:3000/api/auth/login",data)
  }
  setTokenToLocalStorage(token: string) {
    localStorage.setItem(this._authStorageToken, token);
    this.isLogin = true;
  }
  getTokenFromLocalStorage(): string {
    return localStorage.getItem(this._authStorageToken) as string;
  }
  checkUserAuthenticate() {
    if (this.getTokenFromLocalStorage()) this.isLogin = true;
  }
  removeTokenFromLocalStorage() {
    localStorage.removeItem(this._authStorageToken);
  }
  logout() {
    this.removeTokenFromLocalStorage();
    this.isLogin = false;
    this.router.navigateByUrl("auth/login");
  }
}
