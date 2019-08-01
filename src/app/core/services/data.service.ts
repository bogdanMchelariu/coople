import { Injectable } from '@angular/core';
import { IAddress, Address } from '../models/Address';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {
    this.generateList();
  }
  private mockData: IAddress[] = [
    {
      name: 'First address',
      address: {
        country: 'Romania',
        zip: 'ABC18'
      }
    },
    {
      name: 'Second address',
      address: {
        country: 'UK',
        zip: 'ABC21'
      }
    },
    {
      name: 'Third address',
      address: {
        country: 'France',
        zip: 'ABCff'
      }
    }
  ];

  private addressList: Address[] = [];

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
