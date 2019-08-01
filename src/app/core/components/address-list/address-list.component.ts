import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Address } from '../../models/Address';

@Component({
  selector: 'coo-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AddressListComponent implements OnInit {
  @Input() addressList: Address[];
  @Output() selectAddressEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  selectItem(item: Address) {
    this.selectAddressEvent.emit(item);
  }
}