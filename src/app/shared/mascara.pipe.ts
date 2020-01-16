import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascara'
})
export class MascaraPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return `${value.slice(0, 3)}******`;
  }

}
