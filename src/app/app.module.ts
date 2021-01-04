import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressComponent } from './address/address.component';
import { AddressFormExampleComponent } from './address-form-example/address-form-example.component';
import { AddressRootComponent } from './address-root/address-root.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressListComponent,
    AddressComponent,
    AddressFormExampleComponent,
    AddressRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
