import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/componente/componente.component';
import {CarruselComponent} from './components/carrusel/carrusel.component';
import { CompraComponent } from './pages/compra/compra.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { CrearProductoComponent } from "./components/crear-producto/crear-producto.component";

const routes: Routes = [
  {path: '',
  component: HomeComponentComponent},
  {path: 'compra/:id',
  component: CompraComponent},
  {path: 'crear',
  component:  CrearProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
