import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'street',
  pure: true
})
export class StreetPipe implements PipeTransform {
  transform = (zipCode: string) =>
    Number(zipCode.substr(3, zipCode.length - 1))
      ? Number(zipCode.substr(3, zipCode.length - 1)) < 20
        ? 'street1'
        : 'street2'
      : 'noStreetFound'
}
