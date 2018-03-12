import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
//added service to push data from the array added items data. 
import { AdditemsService } from './../services/additems.service';



@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
     
   //event emitter usage
   @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    productname: any;
    Quantity: String;
    price: string;
    itemname: string;
    itemprice: number;
    cart:any[]=[];
    count: number;
    
 






  Products = [
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Cat',
      updated: new Date('1/1/16'),
      price: 1
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Recipes',
      updated: new Date('1/17/16'),
      price: 2
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Work',
      updated: new Date('1/28/16'),
      price: 3
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Work',
      updated: new Date('1/28/16'),
      price: 4
    }
   
    
  ];





  constructor(public additemsService: AdditemsService ) { }

  ngOnInit() {
  }


  additems(Data: any){
      
      
     console.log("button is clicked");
     
    console.log(Data.name +" "+Data.price)
    
     alert("item added successfully")
     
     this.itemname=Data.name;
     this.itemprice=Data.price;

     //let jObj:any = {};
     let a = { productname:this.itemname,
               price:this.itemprice,
               quantity: 1}
    
            

   this.cart.push(a);
   console.log(this.cart[0]);
   console.log(this.cart[1]);
   console.log(this.cart[2]);
   console.log(this.cart[3]); 

   this.count = this.cart.length;
   console.log(this.count);
   this.additemsService.addItems(a);
   

  }
  
cartclick(){
    //it should display the list of item names

 if(this.cart.length<=0){
    alert("No items available")
  }else{
    
    this.cart.forEach((item, index) => {
      console.log(item); // 9, 2, 5
      console.log(index); // 0, 1, 2
      
    

      // let jObj:any = {};
       let a = item;
      //to show list in laert
       
      
      alert(a.productname + a.price + a.quantity)

      //console.log("clickeddd mee")
        });
     
    }
     
    



                         }

removeitems(){
  
 this.notify.emit("I am Here");
   
 console.log("Remove Items") 
 // this.itemname=Data.name;
 // this.itemprice=Data.price;

  //let jObj:any = {};
  let a = { productname:this.itemname,
            price:this.itemprice,
            quantity: 1}
 
         
    this.count=this.count-1; 
    this.cart.pop();
   
   

}
   

   

  }
 








