import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ShowproductsComponent} from '../showproducts/showproducts.component';
//import the add items service to get the items details
//import {DataSource } from '@angular/cdk/collections';

import { AdditemsService } from './../services/additems.service';
//import placeorder services 
import { OrderService} from './../services/order.service'


import { Http} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

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
  
  orderID:string;


  productname: string;
  price: number;
  qunatity: number; 




  
 displayedColumns = ['productname','quantity','price']

  
 dataSource = new MatTableDataSource(this.a);
 

  items = this.a;



 
   


  



  constructor( private http: Http,
              private additemsService: AdditemsService) { 
   
 
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
   // this.a.push(tt);
  
    var l=JSON.stringify(this.a);
    console.log(JSON.stringify(this.a))
    
    
    


    console.log("Setting the array to zero")

    
  
    if(this.a.length>0){
      this.PlaceOrders();

    }else{
      console.log("No items in the cart")
      alert("please add some items in the cart to place order")
    }
 

     console.log("Array length caliculated here"+"  "+this.a.length)

  if(this.a.length>0){
    this.SendEmailNotification() 
    }


    if(this.a.length>0){
    this.a.length = 0;
    }
     //to parse body into a request
    

    //return this.http.post('/api/food/', body, httpOptions);
   
   // console.log("place order"+obj)
    console.log("getting orders list after placing the order+++++++++++========-_______+=+++++______=++++----+++")
    if(this.a.length>0){
    this.getOrdersList();
     }

   


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


getOrdersList(){

  
  this.http.get('http://localhost:3000/placeorders').subscribe(data => {
    console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
  });

 
}



PlaceOrders(){

   this.totalamount=this.totalPrice();
    var ID;
    this.orderID=JSON.stringify(ID);
  
  this.http.post('http://localhost:3000/placeorders',{
  	
     "totalamount":this.totalamount,
     "order":this.a
      }
 ).subscribe(res =>{
     
     console.log(res); 
     var data=res.json();
      this.orderID=data.Id;
    
     console.log("Your Order ID is"+this.orderID);
     
    
  },
  err =>{
    console.log('Error Occured')
  }




);
   


}




SendEmailNotification(){

console.log("expected Order ID"+this.orderID)

  var k= JSON.stringify(this.a)
   var orID=this.orderID
   console.log(orID)

  var txt;
  var person = prompt(k, "email ID");
  if (person == null || person == "") {
      txt = "User cancelled the prompt.";
  } else {
      txt = "Hello " + person + "! How are you today?";
  }

  console.log("User Input Text goes here"+txt)

  //calling email send service to send email notification
  this.http.post('http://localhost:3000/emailNotification/emailnotification',{
  	
     "email":person,
     "text":k,
     "totalamount":this.totalamount,
     "OrderID":orID,
     "orderItems":k,
     "status":"completed",
      }
 ).subscribe(res =>{
     
     console.log(res); 
  },
  err =>{
    console.log('Error Occured')
  }




);



  
 
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