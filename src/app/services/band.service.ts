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
}
