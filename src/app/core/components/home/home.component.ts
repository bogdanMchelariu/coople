import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';
import { IAddress, Address } from '../../models/Address';

@Component({
  selector: 'coo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedAddress: Address;
  constructor(public data: DataService) {}

  ngOnInit() {}

  addAddress = (address: IAddress) => {
    this.data.updateList(address);
    this.selectedAddress = null;
  }
}
