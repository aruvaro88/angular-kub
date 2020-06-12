import { Injectable } from '@angular/core';
import { BANDS } from '../initial-bands';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  constructor() {}
  getBands() {
    return BANDS;
  }

  getOneBand(id:number) {
    return BANDS.find(band => band.id === id);
  }
}
