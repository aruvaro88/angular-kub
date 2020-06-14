import { Component, OnInit } from '@angular/core';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css'],
})
export class BandListComponent implements OnInit {
  bands: Band[];
  selectedBand: Band;
  searchBox =''
  constructor(
    private bandService: BandService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBands();
  }

  getBands(): void {
    this.bands = this.bandService.getBands();
  }

}
