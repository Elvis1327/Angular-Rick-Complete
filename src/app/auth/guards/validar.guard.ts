import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken().pipe(
      tap(resp =>{
        if(resp === false){
          this.router.navigateByUrl('/register/signup')
        }
      })
    )

  }

  canLoad(): Observable<boolean>{
    return this.authService.validarToken().pipe(
      tap(resp =>{
        if(resp === false){
          this.router.navigateByUrl('/register/signup')
        }
      })
    )
  }

}





