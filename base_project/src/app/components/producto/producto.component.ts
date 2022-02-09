import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input()
  nombre:string="";
  @Input()
  descripcion:string="";
  @Input()
  precio:number =0;
  @Input()
  imagen:string ="";


  constructor() { }

  ngOnInit(): void {
  }

}
