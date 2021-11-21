import { Pipe, PipeTransform } from '@angular/core';
import { PipeServer } from '../../angular-pipe-server.model';

@Pipe({
  name: 'statusSortPipe',
  pure: false
})
export class StatusSortPipePipe implements PipeTransform {

  transform(value: PipeServer[], ...args: string[]): PipeServer[]{
    if(value.length == 0) throw new Error('411 Length Required');
    return [...value.filter((server:PipeServer)=>server.status == args[0])];
  }

}
