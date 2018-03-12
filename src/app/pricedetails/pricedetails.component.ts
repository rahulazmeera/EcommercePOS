import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ShowproductsComponent} from '../showproducts/showproducts.component';
//import the add items service to get the items details
//import {DataSource } from '@angular/cdk/collections';

import { AdditemsService } from './../services/additems.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pricedetails',
  templateUrl: './pricedetails.component.html',
  styleUrls: ['./pricedetails.component.css'],
  
})

export class PricedetailsComponent implements OnInit {
  
  showMessage: string ="hello";
  itemname: string;
  //itemprice: number;

  itemprice= "2";
  
 displayedColumns = ['productname','quantity','price']

  
 dataSource = new MatTableDataSource(OrderData);
 



 
   


  



  constructor( private http: Http,
              private additemsService: AdditemsService
            ) { 
   
 
  }  

  ngOnInit() {
  
    //subsribing the service here. 
   this.additemsService.newItemsSubject.subscribe(
     data => //console.log("Subscribed data"+data+ data.name)
       //this.itemname= data.name,
      console.log("Subscribed data"+data.productname+data.price+data.quantity)
          
   );
   
  }

  getItems(){
   // console.log(this._productComponent.cart[0]);
    console.log("add items is clicked")
  }

onNotifyClicked(message: string){
  this.showMessage =message;

  console.log("This is the message"+message);

}

   




  

}


export interface Order {
  productname: string;
  quantity : number;
  price : number;
 
}



const OrderData: Order[] = [
  {
    productname: "apple",
    quantity: 1,
    price: 20,
  },
  {
    productname: "Tomato",
    quantity: 2,
    price: 30,
  }
];

