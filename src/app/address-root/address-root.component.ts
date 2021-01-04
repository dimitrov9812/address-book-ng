import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { Address } from '../address/address.component';

@Component({
  selector: 'address-root',
  templateUrl: './address-root.component.html',
  styleUrls: ['./address-root.component.css']
})
export class AddressRootComponent implements OnInit {
  addresses?: Address[]
  duplicateRecord?: boolean;
  constructor() {
    this.addresses = [new Address("test1","test2",92345324),
                      new Address("test2","test4",92345324)];
    this.duplicateRecord = false;
  }

  ngOnInit(): void {
  }
  deleteRow(address: Address) {
    let filtered = this.addresses?.filter((x) => x !== address && x.surname !== address.surname);
    this.addresses = filtered;
  }
  addItem(address: Address) {
    if (address.name != '' && address.phone != undefined && address.surname != '' ) {
      this.addresses?.forEach((addr) => {
        if (addr.name == address.name && addr.surname == address.surname) {
          this.duplicateRecord = true;
          return alert("Duplicate Record")
        }
      });
      if (this.duplicateRecord) {
        this.duplicateRecord = false;
        return null;
      } else {
        this.duplicateRecord = false;
        return this.addresses?.push(address);
      }
    }
    return alert('You left one of the input fileds empty')
  }
}
