import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/rick';
import { RickService } from '../../services/rick.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public user!: Person[];
  public myForm: FormGroup = this.fb.group({
    name: ['']
  })



  get nombre(){
    return this.myForm.get('name')?.value
  }

  constructor(private rickService: RickService,
              private fb: FormBuilder) { }


  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.rickService.getData().subscribe(res => {
      this.user = res;

    })
  };


}
