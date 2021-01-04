import { Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import { Address } from '../address/address.component';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  name?: string;
  surname?: string;
  phone?: number;
  addresses?: Address[];
  constructor() {
    this.addresses = [new Address("test","testsurname",3234),
                      new Address("test2","testsurname2",323454)];
  }

  ngOnInit(): void {
  }
  resetFields() {
    this.name = "hello";
    this.surname = "";
    this.phone = undefined;
  }
  submitAddress(name: string, surname: string, phone: number) {
    this.addresses?.push(new Address(name, surname, phone))
    this.resetFields();
  }
}
