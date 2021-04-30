import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickRoutingModule } from './rick-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module'
import { RickVistaComponent } from './pages/rick-vista/rick-vista.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RickVistaComponent,
    CharactersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class RickandmortyModule { }
