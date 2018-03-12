import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { SignupComponent } from './signup/signup.component';
import { PricedetailsComponent } from './pricedetails/pricedetails.component';

//importing md material module
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//importing Flex for the CSS
import { FlexLayoutModule } from "@angular/flex-layout";
import { AdminComponent } from './admin/admin.component';
import { AdditemsService } from './services/additems.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowproductsComponent,
    SignupComponent,
    PricedetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [AdditemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
