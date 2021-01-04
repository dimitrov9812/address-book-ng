import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormExampleComponent } from './address-form-example.component';

describe('AddressFormExampleComponent', () => {
  let component: AddressFormExampleComponent;
  let fixture: ComponentFixture<AddressFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
