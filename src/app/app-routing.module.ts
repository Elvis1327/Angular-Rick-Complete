import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'rick',
    loadChildren: () => import ('./rickandmorty/rickandmorty.module').then(r => r.RickandmortyModule)
  },
  {
    path: '**',
    redirectTo: 'rick'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}



