import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserse'
})
export class ResersePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]):string {
    if(value.length==0) throw new Error('428 Precondition Required');
    return value.split('').reverse().join('').toString();
  };

}
