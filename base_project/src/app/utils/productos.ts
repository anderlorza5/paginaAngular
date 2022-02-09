export class PRODUCTOS {
  id:number ;
  nombre:string ;
  descripcion:string ;
  precio:number ;
  imagen:string ;




constructor(id: number,nombre:string, descripcion:string, precio:number,imagen: string){
this.id=id;
this.nombre=nombre;
this.descripcion=descripcion;
this.precio=precio;
this.imagen=imagen;
}



}




/*[
  {nombre:"Casa Botines I Plaza de San Marcelo", descripcion: "Edificio de planta trapezoidal cuya apariencia exterior recuerda a un castillo medieval, aunque en el interior es un inmueble funcional de construcción mixta, con muros de carga en las viviendas y con pilares de hierro en las zonas comerciales.", precio: 2300000, imagen: "src/assets/casa_botines.jpg"},
  {nombre: "Casa Vicens I Calle Carolinas", descripcion:"La Casa Vicens tiene fuertes influencias medievales y árabes en la mayoría de sus estancias, 3 como, por ejemplo, la famosa sala fumador. Cabe destacar el uso avanzado que hizo Gaudí hace de los medios de producción industrial, como en los azulejos y la reja de hierro forjado en forma de palmito.", precio: 3.345000, imagen: "src/assets/casa_vicens.jpg"},
  //{nombre: "", descripcion:"", precio: , imagen: ""}

]*/
