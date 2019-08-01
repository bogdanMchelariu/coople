import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Address } from '../../models/Address';

@Component({
  selector: 'coo-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressListComponent {
  @Input() addressList: Address[];
  @Output() selectAddressEvent = new EventEmitter<any>();
}
