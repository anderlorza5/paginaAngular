import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  @Input()
  nombre:string="";
  @Input()
  id:number=0;
  @Input()
  descripcion:string="";
  precio:number=0;
  @Input()
  imagen:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
