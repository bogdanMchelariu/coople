export interface IAddress {
  id?: string;
  name: string;
  address: IDetails;
}

export interface IDetails {
  zip: string;
  country: string;
}

export class Details implements IDetails {
  country: string;
  zip: string;
  constructor(details?: IDetails) {
    this.country = details.country;
    this.zip = details.zip;
  }
}

export class Address implements IAddress {
  id?: string;
  name: string;
  address: Details;
  constructor(address?: IAddress) {
    this.id = Math.random()
      .toString(36)
      .substr(2, 9);
    this.name = address.name;
    this.address = new Details(address.address);
  }

  updateEntity(address: IAddress) {
    if (typeof address.id !== 'undefined') {
      this.id = address.id;
    }
    if (typeof address.name !== 'undefined') {
      this.name = address.name;
    }

    if (typeof address.address !== 'undefined') {
      this.address = address.address;
    }
  }
}
