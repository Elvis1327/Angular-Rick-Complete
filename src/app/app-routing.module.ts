import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './auth/guards/validar.guard';


const routes: Routes = [
  {
    path: 'rick',
    loadChildren: () => import ('./rickandmorty/rickandmorty.module').then(r => r.RickandmortyModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'register',
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



