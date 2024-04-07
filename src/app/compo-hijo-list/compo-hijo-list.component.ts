import { Component, Input, OnInit } from '@angular/core';
import { CochesInterface } from '../coches-interface';

@Component({
  selector: 'app-compo-hijo-list', // Selector del componente
  templateUrl: './compo-hijo-list.component.html', // Ruta del archivo HTML de plantilla
  styleUrls: ['./compo-hijo-list.component.scss'] // Rutas de los archivos de estilos CSS
})
export class CompoHijoListComponent implements OnInit { // Definición de la clase del componente

  @Input() vehiculoLista: CochesInterface; // Propiedad de entrada para recibir datos del componente padre
  @Input() indice: number; // Propiedad de entrada para recibir el índice del vehículo en la lista

  constructor() { } // Constructor del componente

  ngOnInit(): void { } // Método del ciclo de vida del componente para inicialización

  arrayFecha: Date[] = []; // Arreglo para almacenar las fechas

  // Función para agregar una nueva fecha al arreglo de fechas
  agregarFechaArray(event: Date) {
    this.arrayFecha.push(event);
  }
}
