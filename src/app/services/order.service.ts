import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  //public newOrderSubject = new Subject<any>();
  
 
  placeOrder(body:any){
    //change the URL and the BODY 
    this.http.post('http://localhost:3000/placeorder', body)
      .map(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    
    
  }


  getALLOrders(){

    //change the URL
    this.http.get('http://loacalhost:3000/placeorder').map(data => {
      return data;
    });

  }



  getOrderByID(){

    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });

  }

  
  CancelOrder(){
   //Need a post request
    
    
  }



  




}
