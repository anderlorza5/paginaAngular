import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/componente/componente.component';
import {CarruselComponent} from './components/carrusel/carrusel.component'

const routes: Routes = [
  {path: "hola",
  component: CarruselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
