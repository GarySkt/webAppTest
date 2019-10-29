import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path: 'autenticacion',
    loadChildren: () => import('./modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },

  { path: '', redirectTo: 'autenticacion', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
