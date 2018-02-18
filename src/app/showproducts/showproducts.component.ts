import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
   

  Products = [
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Cat',
      updated: new Date('1/1/16'),
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Work',
      updated: new Date('1/28/16'),
    },
    {
      image:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];





  constructor() { }

  ngOnInit() {
  }


  additems(){
      

      

     
    
     console.log("button is clicked");
     alert("item added successfully")

     



      

  }
  


}
