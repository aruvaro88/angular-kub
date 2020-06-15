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
  searchBox = '';
  newBand: Band;
  constructor(
    private bandService: BandService,
    
  ) {}

  ngOnInit(): void {
    this.getBands();
    console.log("app iniciada")
  }

  getBands(): void {
    this.bands = this.bandService.getBands();
  }
  removeBand(band: Band) {
    this.bandService.removeBand(band)
    this.ngOnInit()
  }
}
