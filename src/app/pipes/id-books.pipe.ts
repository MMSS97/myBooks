import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idBooks'
})
export class IdBooksPipe implements PipeTransform {

  transform(value: string): string {
    let ref:string
    ref="ref-"+value
    return ref;
  }

}
