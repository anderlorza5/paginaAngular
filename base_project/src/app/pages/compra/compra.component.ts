import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { PRODUCTOS } from 'src/app/utils/productos';
import {HomeComponentComponent} from 'src/app/pages/home/home-component/home-component.component';

//import { productos } from 'src/app/utils/constProductos';
//import { productos } from 'src/app/utils/constProductos';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  //productos: Producto[];
  producto :Producto;
  //producto : Producto={id:0,nombre:"ASDASsdfsdfsdD",descripcion:"asfasfasfas",precio:0,imagen:""};
  idProducto=0;



  constructor(private activatedRoute: ActivatedRoute,private _productoService: ProductoService) {

   // this.productos =[];
    //this.productos ={id:0,nombre:"",descripcion:"",precio:0,imagen:""};
    this.producto ={id:0,nombre:"ASDASsdfsdfsdD",descripcion:"asfasfasfas",precio:0,imagen:""};
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((parameters: any)=> {this.idProducto=parameters.get("id")});

    //this.producto=this.productos.filter((x: Producto)=>x.id== this.idProducto)[0];
    //this._productoService.getProductoData().subscribe(apiProductos => this.productos=apiProductos);
    this._productoService.getProductoId(this.idProducto).subscribe(apiProductos => this.producto=apiProductos)
  }

}
