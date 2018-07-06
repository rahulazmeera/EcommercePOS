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
import { RouterModule, Routes } from '@angular/router';
import { SaleplaceComponent } from './saleplace/saleplace.component';
import { AdditemsComponent } from './additems/additems.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';


//routes

const appRoutes: Routes = [
 {
    path:'products',
    component: SaleplaceComponent
 },
 {
   path:'',
   component: SignupComponent
 },
 {
   path:'superadmin',
   component: AdditemsComponent
 }
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowproductsComponent,
    SignupComponent,
    PricedetailsComponent,
    AdminComponent,
    SaleplaceComponent,
    AdditemsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdditemsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
