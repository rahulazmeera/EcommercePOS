import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
//importe subject make the observable
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AdditemsService {

  public newItemsSubject = new Subject<any>();

  constructor(private http: Http) { }



   addItems(Data: any){
      this.newItemsSubject.next(Data);
   }



   //This will insert the new items list into the DB 

   addMoreItems(){
     //post request to add items 

   }


   deleteItems(){
     //delete request 
   }


  ChangeQuantityOfItems(){
    //patch request just to chnage the  Available quantity of the item
    
  }


  UpdateInventoryAfterPlaceOrder(){
  //again update the Order qunatity after order is placed
  //reduce the qunatity of the items

  }
  
  


}
