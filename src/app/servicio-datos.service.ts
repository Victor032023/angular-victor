import { Injectable } from '@angular/core';
import {v4 as uuid } from 'uuid';
import { CochesInterface } from './coches-interface';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor() { }

  public vehiculos: CochesInterface [] = [
    { id: "1", marca: "Tesla", modelo: "Model3", autonomia: 650 },
    { id: "2", marca: "Tesla", modelo: "ModelY", autonomia: 550 }
  ];


  agregarVehiculoService(vehiculo:CochesInterface):void{

    const newVehiculo: CochesInterface = {id: uuid(), ...vehiculo }

    this.vehiculos.push(newVehiculo);
  }


  eliminarVehiculoService(){

  this.vehiculos.pop();

}

}
