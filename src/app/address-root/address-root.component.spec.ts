import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRootComponent } from './address-root.component';

describe('AddressRootComponent', () => {
  let component: AddressRootComponent;
  let fixture: ComponentFixture<AddressRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
