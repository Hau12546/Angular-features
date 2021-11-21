import { Pipe, PipeTransform } from '@angular/core';
import { PipeServer } from '../angular-pipe-server.model';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit:number=0): unknown {
    if(limit>0){
      return value.toString().slice(0,limit);
    }
    return value;
  }

}
