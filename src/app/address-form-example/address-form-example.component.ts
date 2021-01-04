import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from '../address/address.component';

@Component({
  selector: 'address-form-example',
  templateUrl: './address-form-example.component.html',
  styleUrls: ['./address-form-example.component.css']
})
export class AddressFormExampleComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Address>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewAddress(name:string, surname: string, phone: number) {
    this.newItemEvent.emit(new Address(name, surname, phone));
  }
}
