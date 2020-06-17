import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band.model';
import { NgForm } from '@angular/forms';
import { TagService} from "../../services/tag.service"

@Component({
  selector: 'app-new-band-form',
  templateUrl: './new-band-form.component.html',
  styleUrls: ['./new-band-form.component.css'],
})
export class NewBandFormComponent implements OnInit {


  constructor(private location: Location, public bandService: BandService, private tagService: TagService) { }

  ngOnInit(): void {
    //metodo que actualiza el titulo de la pestaña del navegador
    this.tagService.updateTitle("New Band")
  }
//metodo que guarda los datos del formulario para crear una nueva banda en la "base de datos"
  saveBand(bandForm: NgForm): void {
    //se recoge el vontenido del campo members y se divide cada dato para meterlo como elemntos de un array
    bandForm.value.members = bandForm.value.members.split(', ')
    //metodo que recoge todos los campos del formulario y añade la banda a la "base de datos"
    this.bandService.addNewBand(bandForm.value);
    this.goBack()
  }
   //metodo que te lleva a la ruta anterior
  goBack(): void {
    this.location.back();
  }
}
