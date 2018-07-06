import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http:Http) { 
       
  }
    
 
   

   //authenticate login
  login(body:any){

          var result = new Subject();
          
          this.http.post('http://localhost:3000/Signup/login', body).subscribe(res =>{
           
              console.log(res);
              result.next(res);
              
            
        }, err=>{
           console.log(err);
           result.error(err);
        }
        );
        

        return result.asObservable();
     
        
    }
    
  


   



}
