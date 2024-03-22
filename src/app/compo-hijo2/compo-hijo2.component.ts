import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo-hijo2',
  templateUrl: './compo-hijo2.component.html',
  styleUrls: ['./compo-hijo2.component.scss']
})
export class CompoHijo2Component implements OnInit {

  // EventEmitter para emitir la fecha de entrega al componente padre
  @Output() fechaEntrega = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  // Función para agregar la fecha de entrega
  introducirFecha(value: string) {
    // Dividir la cadena de fecha en año, mes y día
    const [year, month, day] = value.split('-');
    // Crear un objeto Date con los valores obtenidos
    const fecha = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    // Emitir la fecha de entrega al componente padre
    this.fechaEntrega.emit(fecha);
  }
}
