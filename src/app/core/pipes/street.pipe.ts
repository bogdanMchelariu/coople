import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'street',
  pure: true
})
export class StreetPipe implements PipeTransform {
  transform(zipCode: string) {
    if (Number(zipCode.substr(3, zipCode.length - 1))) {
      if (Number(zipCode.substr(3, zipCode.length - 1)) < 20) {
        return 'street1';
      } else {
        return 'street2';
      }
    } else {
      return 'noStreetFound';
    }
  }
}
