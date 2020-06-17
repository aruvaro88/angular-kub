import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  //logica del filtro conectado a la barra de busqueda 
  transform(values: any, args: any): any {
    const resultBands = [];
    //se recorre el array de bandas y se comprueba si el nombre de la banda se corresponde con el argumento que introduce el usuario
    for (const band of values) {
      if (band.name.toLowerCase().indexOf(args.toLowerCase()) > -1) { //si no encuentra coincidencias devuelve -1 de ahi la condicion
        //se almacena en el array resultBands las bandas que cumplen la condicion
        resultBands.push(band);
      }
    }
    return resultBands;
  }
}
