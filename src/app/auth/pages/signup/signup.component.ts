import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

    onSubmit(){
      const { name, email, password } = this.myForm.value;
      this.authService.signup(name, email, password).subscribe((res)=>{
      if(res === true){
        this.router.navigateByUrl('/rick/characters')
      }
      })


    }

}
