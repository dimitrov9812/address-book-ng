import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../address/address.component';
@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() addresses?: Address[];
  @Output() deleteEvent = new EventEmitter<Address>();
  constructor() {
  }

  ngOnInit(): void {
  }

  deleteRecord(address: Address) {
    console.log("got here")
    this.deleteEvent.emit(address);
  }
}