import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Propiedades para almacenar el título de la aplicación y la lista de vehículos
  title = 'VEHÍCULOS ELÉCTRICOS';
  vehiculos: any[] = [
    { marca: "Tesla", modelo: "Model3", autonomia: 650 },
    { marca: "Tesla", modelo: "ModelY", autonomia: 550 }
  ];

  // Propiedades para almacenar los valores de los cuadros de texto
  cuadroMarca: string = "";
  cuadroModelo: string = "";
  cuadroAutonomia: number = 0;

  // Función para agregar un nuevo vehículo a la lista
  agregarVehiculo() {
    // Creamos un nuevo objeto vehiculo con los valores de los cuadros de texto
    let elVehiculo = {
      marca: this.cuadroMarca,
      modelo: this.cuadroModelo,
      autonomia: this.cuadroAutonomia
    };
    // Añadimos el nuevo vehiculo al array
    this.vehiculos.push(elVehiculo);
  }
// creo atributo/varibale de clase opcional que irá tomando el valor de vehiculos eliminados de la lista
  vehiculoEliminado?: string;

// Función para eliminar un vehículo a la lista
eliminarVehiculo() {
  this.vehiculoEliminado = this.vehiculos.pop();
// esto es opcinal, muestra registro de vehiculos eliminados por consola del navegador
  console.log(this.vehiculoEliminado)
}
}
