import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { CocheInterface } from '../interface/coche-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private apiUrl = 'http://localhost:3000/vehiculos';

  constructor(private http: HttpClient) { }

  cargarVehiculos(): Observable<CocheInterface[]> {
    return this.http.get<CocheInterface[]>(this.apiUrl);
  }

  agregarVehiculoService(vehiculo: CocheInterface): Observable<any> {
    return this.http.post(this.apiUrl, vehiculo).pipe(
      catchError(error => {
        console.error('Error al agregar el vehículo:', error);
        throw error;
      })
    );
  }

  eliminarVehiculoService(): Observable<any> {
    // Primero, cargamos todos los vehículos para obtener el último 'id'
    return this.http.get<CocheInterface[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al cargar los vehículos:', error);
        throw error;
      }),
      // Utilizamos mergeMap para manejar el resultado y luego realizar la solicitud de eliminación
      mergeMap((vehiculos: CocheInterface[]) => {
        // Verificamos si hay vehículos
        if (vehiculos.length === 0) {
          console.error('No hay vehículos para eliminar.');
          throw new Error('No hay vehículos para eliminar.');
        }
        // Obtenemos el último vehículo usando su 'id'
        const ultimoId = vehiculos[vehiculos.length - 1].id;
        // Construimos la URL para eliminar el último vehículo
        const url = `${this.apiUrl}/${ultimoId}`;
        // Realizamos la solicitud de eliminación
        return this.http.delete(url).pipe(
          catchError(error => {
            console.error('Error al eliminar el último vehículo:', error);
            throw error;
          })
        );
      })
    );
  }
}
