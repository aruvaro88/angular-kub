import { Component, OnInit } from '@angular/core';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band.model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css'],
})
export class BandListComponent implements OnInit {
  bands: Band[];
  selectedBand: Band;
  constructor(private bandService: BandService) {}
  getBands(): void {
    this.bands = this.bandService.getBands();
  }
  onSelect(band: Band): void {
    this.selectedBand = band;
    console.log(this.selectedBand.name);
  }

  ngOnInit(): void {
    this.getBands();
  }
}
