import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTOS } from 'src/app/utils/productos';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {


  /*productos: PRODUCTOS[]=[{id:1,nombre:"Casa Botines I Plaza de San Marcelo", descripcion: "Edificio de planta trapezoidal cuya apariencia exterior recuerda a un castillo medieval, aunque en el interior es un inmueble funcional de construcción mixta, con muros de carga en las viviendas y con pilares de hierro en las zonas comerciales.", precio: 2300000, imagen: "/assets/casa_botines.jpg"},
  {id:2,nombre: "Casa Vicens I Calle Carolinas", descripcion:"La Casa Vicens tiene fuertes influencias medievales y árabes en la mayoría de sus estancias, 3 como, por ejemplo, la famosa sala fumador. Cabe destacar el uso avanzado que hizo Gaudí hace de los medios de producción industrial, como en los azulejos y la reja de hierro forjado en forma de palmito.", precio: 3.345000, imagen: "/assets/casa_vicens.jpg"},
  {id:3,nombre:"«El Capricho» I Barrio de Sobrellano", descripcion:"Obra de clara influencia orientalista, sobre todo en la torre, que nos recuerda a un minarete. El exterior del edificio se caracteriza por la utilización de la piedra en la parte baja y del ladrillo visto adornado con franjas de cerámica vidriada que representan girasoles. De gran vistosidad, la obra supone un paso adelante en el estilo propio y singular de Gaudí.", precio:1450000, imagen:"/assets/el_capricho.jpg"},
  {id:4,nombre:"Palacio Güell I Calle Nou de la Rambla", descripcion:"Son de destacar las caballerizas en el sótano, con acceso mediante rampas helicoidales, y la azotea. Aquí Gaudí rompe radicalmente con la tradición y presenta las chimeneas y ventilaciones como elementos escultóricos revestidos de trencadís. Luego repitió esta tipología de azotea en la Casa Batlló y en La Pedrera.", precio:2000000, imagen:"/assets/palacio_guell.jpg"},
  {id:5,nombre:"Basílica de la Sagrada Família I Calle de Mallorca", descripcion:"Gaudí proyectó una iglesia de planta basilical de cinco naves con un crucero de tres, configurando una planta de cruz latina. La basílica consta de tres fachadas monumentales que representan los tres momentos culminantes de la vida de Jesucristo: Nacimiento, Pasión y Gloria. Coronó el conjunto con dieciocho torres, de entre 100 m y 170 m de altura: doce corresponden a los apóstoles, cuatro a los evangelistas y dos —las más altas—a María y Jesús. La Sagrada Familia fue oficialmente consagrada como basílica para el culto católico en 2010.", precio:105555000, imagen:"/assets/sagrada_familia.jpg"},
  //{nombre:"", descripcion:"", precio:0, imagen:""}
  ];

  constructor() { }

  ngOnInit(): void {
  }*/

  //@Output() likeEvent = new EventEmitter<string>();
  productos: Producto[]|null;

 // @Input() filter: string | null;
  constructor(private _productoService: ProductoService) {
    this.productos = null;
    //this._productoService.getProductoData().subscribe(apiBooks => this.productos=apiBooks);
    //this.filter = null;

  }

  /*like() {
    this.likeEvent.emit();
  }*/

  ngOnInit(): void {
   this._productoService.getProductoData().subscribe(apiProductos => this.productos=apiProductos);
 }

}
