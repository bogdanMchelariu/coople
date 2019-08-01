import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'street',
  pure: true
})
export class StreetPipe implements PipeTransform {
  transform(zipCode: string): string {
    if (Number(zipCode.substr(3, zipCode.length - 1))) {
      if (Number(zipCode.substr(3, zipCode.length - 1)) < 20) {
        return 'Elisabeth Street';
      } else {
        return 'London Street';
      }
    } else {
      return 'ZIP does not correspond to any street';
    }
  }
}
