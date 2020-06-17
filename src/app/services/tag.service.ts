import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private title: Title, private meta: Meta) {}

  //metodo para actualizar la pestaña del navegador segun lo que reciba como parametro
  updateTitle(title: string) {
    this.title.setTitle(title);
  }
}
