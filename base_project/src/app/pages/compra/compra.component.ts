import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTOS } from 'src/app/utils/productos';
import { productos } from 'src/app/utils/constProductos';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {



idProducto=0;

producto:  PRODUCTOS={id:0,nombre:"",descripcion:"",precio:0,imagen:""}

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((parameters: any)=> {this.idProducto=parameters.get("id")});

    this.producto=productos.filter((x: PRODUCTOS)=>x.id== this.idProducto)[0];

  }

}
