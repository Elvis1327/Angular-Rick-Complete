import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickService } from '../../services/rick.service';
import { switchMap } from 'rxjs/operators';
import { Person } from '../../interfaces/rick';

@Component({
  selector: 'app-rick-vista',
  templateUrl: './rick-vista.component.html',
  styleUrls: ['./rick-vista.component.css']
})
export class RickVistaComponent implements OnInit {

  public user: any;

  constructor(private activatedRoute: ActivatedRoute,
              private rickService: RickService,
              private router     : Router) { }


  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(  ({id}) => this.rickService.getUserById(id)  )
    ).subscribe(res =>{
      this.user = res;
    })
  };

  goBack(){
    this.router.navigate(['/rick/characters'])
  }

}
