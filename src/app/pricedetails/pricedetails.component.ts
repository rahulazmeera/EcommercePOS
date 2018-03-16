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
  totalamount: number;
  itemprice= "2";
  a:any[]=[];
  


  productname: string;
  price: number;
  qunatity: number; 




  
 displayedColumns = ['productname','quantity','price']

  
 dataSource = new MatTableDataSource(this.a);
 

  items = this.a;



 
   


  



  constructor( private http: Http,
              private additemsService: AdditemsService
            ) { 
   
 
  }  

  ngOnInit() {
    
 

    //subsribing the service here. 
   this.additemsService.newItemsSubject.subscribe(
     data => //console.log("Subscribed data"+data+ data.name)
       //this.itemname= data.name,
     // console.log("Subscribed data"+data.productname+data.price+data.quantity)
        this.a.push(data)
       
   )
  

 



  }



  PlaceOrder(){
   // console.log(this._productComponent.cart[0]);
    this.totalamount=this.totalPrice();
    var tt={ "Totalprice":this.totalamount}
    this.a.push(tt);

    var l=JSON.stringify(this.a);
    console.log(JSON.stringify(this.a))
    
    console.log("Setting the array to zero")
    this.a.length = 0;
     //to parse body into a request
    

    //return this.http.post('/api/food/', body, httpOptions);
   
   // console.log("place order"+obj)

   
  }

   


onNotifyClicked(message: string){
  this.showMessage =message;

  console.log("This is the message"+message);

}

   

totalPrice(){
  var total=0;
  console.log("total price is calculated here");

  for (let item of this.items) {

   //console.log("clicked"+item); 
    
    total += item.price;
} 
console.log(total);
//return total;
return total;


}








  

}



/*
export interface Order {

  productname: string;
  quantity : number;
  price : number;

 
}

this.a=Array;

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

*/