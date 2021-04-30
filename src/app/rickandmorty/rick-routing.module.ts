import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { RickVistaComponent } from './pages/rick-vista/rick-vista.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'user/:id', component: RickVistaComponent},
      {path: 'characters', component: CharactersComponent},
      {path: '**', redirectTo: 'characters'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class RickRoutingModule {

}

