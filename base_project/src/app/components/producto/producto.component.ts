import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, } from '@angular/core';
import { FormControlName, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import  { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto |null;
  idProducto =0;
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

  //puja: number=0;
  //pujaMaxima :number=0;

  //pujacontrl = new FormControl()
  precioForm =this.fb.group({productosPrecio: ['', Validators.required],})

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,private _productoService: ProductoService) {
    this.producto = null;
  }
  onSubmit(){
    this._productoService.update(this.idProducto, this.producto?.nombre!, this.producto?.descripcion!, this.precioForm.value.productosPrecio, this.producto?.imagen!).subscribe(apiProductos => this.producto=apiProductos);
    //window.location.reload();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any)=> {this.idProducto=parameters.get("id")});

this._productoService.getProductoId(this.idProducto).subscribe(apiProductos => this.producto=apiProductos)

  }


    /*getPuja(event:Event){
      event.preventDefault();
      this.puja=this.pujacontrl.value;
      if (this.puja>this.pujaMaxima && this.puja> this.precio)  {
        this.pujaMaxima=this.puja;

      }

    }*/
  }


