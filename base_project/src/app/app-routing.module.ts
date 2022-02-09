import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/componente/componente.component';
import {CarruselComponent} from './components/carrusel/carrusel.component';
import { CompraComponent } from './pages/compra/compra.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';


const routes: Routes = [
  {path: '',
  component: HomeComponentComponent},
  {path: 'compra/:id',
  component: CompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
