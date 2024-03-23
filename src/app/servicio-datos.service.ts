import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor() { }


  vehiculos: any[] = [
    { marca: "Tesla", modelo: "Model3", autonomia: 650 },
    { marca: "Tesla", modelo: "ModelY", autonomia: 550 }
  ];

  agregarVehiculoService(vehiculo:any){

    this.vehiculos.push(vehiculo);
  }


  eliminarVehiculoService(){

  this.vehiculos.pop();

}

}
