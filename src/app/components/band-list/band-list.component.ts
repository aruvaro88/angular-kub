import { Component, OnInit } from '@angular/core';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band.model';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css'],
})
export class BandListComponent implements OnInit {
  //inicializacion de variables
  bands: Band[];
  searchBox = '';
  constructor(
    private bandService: BandService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    //llamada al metodo que carga la lista de bandas al inicializar el componente
    this.getBands();
    //metodo que actualiza el titulo de la pestaña del navegador
    this.tagService.updateTitle('Angular Rocks');
  }
 //metodo que recoge todas las bandas existentes en la "base de datos"
  getBands(): void {
    this.bands = this.bandService.getBands();
  }
}
