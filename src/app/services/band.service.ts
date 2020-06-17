import { Injectable } from '@angular/core';
import { BANDS } from '../initial-bands';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  public selectedBand: Band = {};

  constructor() {}

  //metodo que devuelve las bandas almacenadas en el archivo initial-bands
  getBands() {
    return BANDS;
  }

  //metodo que busca una banda por su id y la retorna
  getOneBand(id: number) {
    return BANDS.find((band) => band.id === id);
  }

  //metodo que añade una nueva banda, incrementa el id en base a la longitud del array de las bandas y añade el objeto
  addNewBand(band: Band) {
    band.id = BANDS.length + 1;
    BANDS.push(band);
  }

  //metodo que elimina una banda del array, a traves del indice de la banda
  removeBand(band: Band) {
    BANDS.splice(BANDS.indexOf(band), 1);
  }
}
