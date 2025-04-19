import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from '../../auth/login/queries/login-gql.service';

export interface Article {
  id:string,
  price:number,
  name:string,
  image:string,
  description:string,
}

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html',
  styleUrls: ['./searched-articles.component.scss']
})
export class SearchedArticlesComponent implements OnInit{
user:IUser | null = null;
  articles:Article[] = [
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro, 256 GB, blanc, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"1"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro',
      price: 120000,  
      description:"",
      id:"2"
    },
    {
      image: './../../../../assets/SVG/product3.svg',
      name: 'Iphone 14 Pro, 2T, blanc, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"3"
    },
    {
      image: './../../../../assets/SVG/product4.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"4"
    },
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro, 256 GB, noir, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"5"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro',
      price: 120000,  
      description:"",
      id:"6 "
    },
    {
      image: './../../../../assets/SVG/product3.svg',
      name: 'Iphone 14 Pro, 2T, noir, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"7"
    },
    {
      image: './../../../../assets/SVG/product4.svg',
      name: 'Iphone 14 Pro',
      price: 120000,
      description:"",
      id:"8"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro',
      price: 120000,  
      description:"",
      id:"2"
    },
    {
      image: './../../../../assets/SVG/product3.svg',
      name: 'Iphone 14 Pro, 2T, noir, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"3"
    },
    {
      image: './../../../../assets/SVG/product1.svg',
      name: 'Iphone 14 Pro, 256 GB, noir, écran 6,1 pouces',
      price: 120000,
      description:"",
      id:"5"
    },
    {
      image: './../../../../assets/SVG/product2.svg',
      name: 'Iphone 14 Pro, 1T gold, ercan Led',
      price: 120000,  
      description:"",
      id:"6 "
    },
  
  ]
  constructor(
    
  ){
    
  }
  ngOnInit(): void {
 
  }

  getSearchValue(value:string){
    console.log(value);
  }

}
