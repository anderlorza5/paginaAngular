import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, } from '@angular/core';
import { FormControlName, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input()
  id: number=0;
  @Input()
  nombre:string="";
  @Input()
  descripcion:string="";
  @Input()
  precio:number =0;
  @Input()
  imagen:string ="";

  puja: number=0;
  pujaMaxima :number=0;

  pujacontrl = new FormControl()


  constructor() { }

  ngOnInit(): void {
  }


    getPuja(event:Event){
      event.preventDefault();
      this.puja=this.pujacontrl.value;
      if (this.puja>this.pujaMaxima) {
        this.pujaMaxima=this.puja;

      }

    }
  }


