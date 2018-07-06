import { Component, OnInit } from '@angular/core';
//import login service from services 
import { LoginService } from './../services/login.service';
import { Http } from '@angular/http';
import { Body } from '@angular/http/src/body';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginService]
})
export class SignupComponent implements OnInit {
   

  //first define the values we require
  public UserName: string;
  public PassWord: string;
 
  


  constructor(private http:Http, private loginService: LoginService) { 
   
   // private loginService:LoginService
     //let UserName:String;
     //let PassWord:String;
  }

  ngOnInit() {
      
    
    
  }
   
  



  
 

  Login(){
        
    console.log(this.UserName+" "+this.PassWord);


    var body =  {
                  username: this.UserName,
                  password: this.PassWord
                 };
   
    var a= this.loginService.login(body).subscribe((result) => {
      console.log(result);

    },(err) => {



    }); 
     

    console.log("hello"+a);  
   // this.loginService.login(body);
    if(a!=null){
      console.log("Login Successful")
    }else{
      console.log("no login")
    }



  }




}
