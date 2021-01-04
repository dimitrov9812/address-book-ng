import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() name?: string;
  @Input() surname?: string;
  @Input() phone?: number;
  @Output() deleteEvent = new EventEmitter<Address>();
  constructor () {}
  ngOnInit(): void {
  }

  deleteRecord(name: string, surname: string, phone: number) {
    this.deleteEvent.emit(new Address(name, surname, phone));
  }
}

export class Address {
  name: string;
  surname: string;
  phone: number;

  constructor(name: string, surname: string, phone: number) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
  }
}
