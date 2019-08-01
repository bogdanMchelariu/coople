import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress, Address } from '../../models/Address';

@Component({
  selector: 'coo-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressFormComponent implements OnInit, OnChanges {
  addressForm: FormGroup;

  @Input() editAddress: Address;
  @Output() newAddressEvent = new EventEmitter<IAddress>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editAddress.currentValue) {
      this.addressForm.setValue(changes.editAddress.currentValue);
    }
  }
  private createForm() {
    this.addressForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      address: this.fb.group({
        country: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern(/^ABC/)]]
      })
    });
  }

  onSubmit() {
    this.newAddressEvent.emit(this.addressForm.value as IAddress);
    this.addressForm.reset();
  }
}
