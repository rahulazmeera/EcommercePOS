import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  public newOrderSubject = new Subject<any>();
  
 
  placeOrder(body:any){
    //change the URL and the BODY 
    this.http.post('http://jsonplaceholder.typicode.com/posts', body)
      .subscribe(
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
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
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
