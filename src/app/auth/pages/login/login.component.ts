import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['',[Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(  private authService: AuthService,
                private fb: FormBuilder,
                private router: Router) { }

  onSubmit(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).map(datos => datos.markAllAsTouched())
      return;
    }
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).subscribe(res=>{
      if(res === true){
        this.router.navigateByUrl('/rick/characters')
      }
    })


  }

}
