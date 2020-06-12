import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';
import * as data from '../../utils/initial-bands.json';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private bandsData: any = (data as any).default;

  constructor() {}
  getBands() {
    return this.bandsData;
  }
}
