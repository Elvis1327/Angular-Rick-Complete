import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/rick';
import { RickService } from '../../services/rick.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  get infoUser(){
    return this.authService.info;
  }

  public user!: Person[];
  public myForm: FormGroup = this.fb.group({
    name: ['']
  })



  get nombre(){
    return this.myForm.get('name')?.value;
  }

  constructor(private rickService: RickService,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.rickService.getData().subscribe(res => {
      this.user = res;
    });
  };

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }


}
