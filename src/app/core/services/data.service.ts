import { Injectable } from '@angular/core';
import { IAddress, Address } from '../models/Address';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {
    this.generateList();
  }

  private addressList: Address[] = [];

  private mockData: IAddress[] = [
    {
      name: 'Timisoara',
      address: {
        country: 'Romania',
        zip: '12345'
      }
    },
    {
      name: 'London',
      address: {
        country: 'UK',
        zip: '54444'
      }
    }
  ];

  private generateList = () => {
    this.addressList = this.mockData.map(address => new Address(address));
  }

  updateList(item: IAddress) {
    const itemExist = this.addressList.findIndex(address => item.id === address.id);
    if (itemExist !== -1) {
      const updatedItem = this.addressList[itemExist];
      updatedItem.updateEntity(item);
      this.addressList.splice(itemExist, 1, updatedItem);
    } else {
      this.addressList = [...this.addressList, new Address(item)];
    }
  }

  getAddressList = (): Observable<IAddress[]> => of(this.addressList);
}
