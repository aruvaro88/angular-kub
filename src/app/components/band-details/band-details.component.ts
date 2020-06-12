import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../../models/band.model';
import { BandService } from '../../services/band.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from "@angular/common"

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css'],
})
export class BandDetailsComponent implements OnInit {
  @Input() band: Band;
  constructor(
    private bandService: BandService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOneBand();
  }
  getOneBand(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.band= this.bandService.getOneBand(id);
    console.log(this.band)
  }
  goBack(): void{
    this.location.back()
  }
}
