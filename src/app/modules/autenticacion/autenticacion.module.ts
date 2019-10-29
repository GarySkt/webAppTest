import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionComponent } from './autenticacion.component';

import { MatCardModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutenticacionRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,    
    MatProgressBarModule
  ]
})
export class AutenticacionModule { }
