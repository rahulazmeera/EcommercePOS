import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

//import {DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-pricedetails',
  templateUrl: './pricedetails.component.html',
  styleUrls: ['./pricedetails.component.css']
})

export class PricedetailsComponent implements OnInit {
  
  

 
  
 displayedColumns = ['productname','quantity','price']

  
 dataSource = new MatTableDataSource(OrderData);
 



 
   


  



  constructor() { 
   
 
  }

  ngOnInit() {
  
   
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

