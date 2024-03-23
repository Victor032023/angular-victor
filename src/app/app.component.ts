import { Component } from '@angular/core';
import { ServicioDatosService } from './servicio-datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // INYECTO SERVICIO EN EL CONSTRUCTOR
  constructor(private vehiculoService: ServicioDatosService) {}

  // Propiedad para almacenar el título de la aplicación
  title = 'VEHÍCULOS ELÉCTRICOS';

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
    // Añadimos el nuevo vehículo al servicio
    this.vehiculoService.agregarVehiculoService(elVehiculo);
    // Limpiamos los cuadros de texto después de agregar un vehículo
    // this.cuadroMarca = "";
    // this.cuadroModelo = "";
    // this.cuadroAutonomia = 0;
  }

  // Función para eliminar un vehículo de la lista
  eliminarVehiculo() {
    // Eliminamos el último vehículo del servicio
    this.vehiculoService.eliminarVehiculoService();
  }

  // Método para obtener la lista de vehículos desde el servicio
  get vehiculos() {
    return this.vehiculoService.vehiculos;
  }
}
