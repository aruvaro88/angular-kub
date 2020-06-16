import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-band-form',
  templateUrl: './new-band-form.component.html',
  styleUrls: ['./new-band-form.component.css'],
})
export class NewBandFormComponent implements OnInit {


  constructor(private location: Location, public bandService: BandService) { }

  ngOnInit(): void {

  }

  saveBand(bandForm: NgForm): void {
    bandForm.value.members = bandForm.value.members.split(', ')
    this.bandService.addNewBand(bandForm.value);
    this.goBack()
  }
  goBack(): void {
    this.location.back();
  }
}
