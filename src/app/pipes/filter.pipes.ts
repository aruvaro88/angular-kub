import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: any, args: any): any {
    const resultBands = [];
    for (const band of values) {
      if (band.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultBands.push(band);
      }
    }
    return resultBands;
  }
}
