import { Injectable } from '@angular/core';
import { BANDS } from '../initial-bands';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  public selectedBand: Band = {};

  constructor() {}

  getBands() {
    return BANDS;
  }

  getOneBand(id: number) {
    return BANDS.find((band) => band.id === id);
  }

  addNewBand(band: Band) {
    band.id = BANDS.length + 1;
    BANDS.push(band);
  }

  removeBand(band: Band) {
    BANDS.splice(BANDS.indexOf(band), 1);
  }
}
