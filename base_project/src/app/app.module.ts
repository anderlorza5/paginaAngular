import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponenteComponent } from './components/componente/componente.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CompraComponent } from './pages/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponentComponent,
    HomeComponentComponent,
    HeaderComponent,
    ComponenteComponent,
    FooterComponent,
    CarruselComponent,
    ProductoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
