import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Usuario, userInfo } from '../interfaces/auth.interfaces';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: userInfo;
  private route: string = environment.authRoute;
  get info(){
    return {...this.user}
  }
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const body = { email, password }
    return this.http.post<Usuario>(`${this.route}/api/auth/join`, body).pipe(
      tap(resp => {
        if(resp.ok === true){
          localStorage.setItem('token', resp.token)
        }
      }),
      map(res =>  res.ok)
    )
  }

  validarToken(){
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.get<Usuario>(`${this.route}/api/auth/renew`, {headers: headers}).pipe(
      map(res => {
        this.user = {
          name: res.name
        };
        return res.ok
      })
    )

  }

  signup(name: string, email: string, password: string){
    const body = { name, email, password };
    return this.http.post<Usuario>(`${this.route}/api/auth/create`, body).pipe(
      tap(resp =>{
        if(resp.ok === true){
          localStorage.setItem('token', resp.token);
        }
      }),
      map(res => res.ok)
    )
  }
}
