import { Component } from '@angular/core';
import { BandService } from './services/band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-kub';
  bands;
  constructor(private bandService: BandService) {
    this.bands= bandService.getBands()
  }
}
