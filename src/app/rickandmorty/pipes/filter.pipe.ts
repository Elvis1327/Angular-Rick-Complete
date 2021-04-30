import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/rick';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: Person[], text: string){
    if(!text){
      return value
    }else{
      return value.filter(user =>{
        return user.name.toUpperCase().includes(text.toUpperCase())
      })
    }
  }


}





