import { Component, OnInit, Input } from '@angular/core';
import {Band} from "../../models/band.model"

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit {
@Input() band: Band
  constructor() { }

  ngOnInit(): void {
  }

}
