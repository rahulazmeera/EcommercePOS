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




}
