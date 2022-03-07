import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { Validators } from '@angular/forms';
import {

  AbstractControl,

  FormBuilder,

  ValidationErrors,

  ValidatorFn,

  } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  productoForm = this.fb.group({

    productoName: ['', Validators.required],

    productoDescripcion: ['',Validators.required],

    productoPrecio: ['',Validators.required],
    productoImagen: ['',Validators.required],

    });



  constructor(private _productoService: ProductoService, private fb: FormBuilder) {

  }
  onSubmit(){

    this._productoService.postProductoData(this.productoForm.value)

  }


  ngOnInit(): void {

  }

}
