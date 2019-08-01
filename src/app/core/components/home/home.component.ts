import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services';
import { IAddress, Address } from '../../models/Address';

@Component({
  selector: 'coo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  selectedAddress: Address;
  constructor(public data: DataService) {}

  updateAddressList = (address: IAddress) => {
    this.data.updateList(address);
    this.selectedAddress = null;
  }
}
