import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from './servicio/servicio-datos.service';
import { CocheInterface } from './interface/coche-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  titulo = 'VEHÍCULOS ELÉCTRICOS';
  isVisible: boolean = true;
  cuadroMarca: string = '';
  cuadroModelo: string = '';
  cuadroAutonomia: number = 100;
  vehiculos$: Observable<CocheInterface[]>; // Observable para la lista de vehículos

  constructor(private vehiculoService: ServicioDatosService) {}

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculos$ = this.vehiculoService.cargarVehiculos();
  }

  agregarVehiculo() {
    const nuevoVehiculo: CocheInterface = {
      marca: this.cuadroMarca,
      modelo: this.cuadroModelo,
      autonomia: this.cuadroAutonomia
    };

    this.vehiculoService.agregarVehiculoService(nuevoVehiculo).subscribe(() => {
      this.cargarVehiculos();
      this.limpiarCampos();
    });
  }

  eliminarVehiculo() {
    this.vehiculoService.eliminarVehiculoService().subscribe(() => {
      this.cargarVehiculos();
    });
  }

  alternarVisibilidadBoton() {
    this.isVisible = !this.isVisible;
  }

  limpiarCampos() {
    this.cuadroMarca = '';
    this.cuadroModelo = '';
    this.cuadroAutonomia = 100;
  }
}
