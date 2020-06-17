import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../../models/band.model';
import { BandService } from '../../services/band.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css'],
})
export class BandDetailsComponent implements OnInit {
  @Input() band: Band;
  // inicializacion de variables
  constructor(
    private bandService: BandService,
    private route: ActivatedRoute,
    private location: Location,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    //llamada al metodo para obtener la banda seleccionada al cargar el componente
    this.getOneBand();
    //metodo que actualiza el titulo de la pestaña del navegador
    this.tagService.updateTitle(this.band.name + ' Details');
  }

  getOneBand(): void {
    //se obtiene el id de la banda seleccionada a traves de la url
    const id = +this.route.snapshot.paramMap.get('id');
    //se almacena el objeto banda con el id correspondiente
    this.band = this.bandService.getOneBand(id);
  }

  goBack(): void {
    //metodo que te devuelve a la ruta anterior
    this.location.back();
  }

  removeBand(band: Band) {
    //metodo para eliminar la banda seleccionada, que se le pasa como argumento al metodo
    this.bandService.removeBand(band);
    this.goBack();
  }
}
