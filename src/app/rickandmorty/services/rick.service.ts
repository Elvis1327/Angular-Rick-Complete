import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Empty } from '../interfaces/rick';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private http: HttpClient) { }


  getData(){
    const url: string = `https://rickandmortyapi.com/api/character`;
    return this.http.get<Empty>(url).pipe(
      map(res => res.results)
    )
  };


  getUserById(id: any){
    const url: string = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get(url);
  }
}
