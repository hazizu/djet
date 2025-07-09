import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface ISubcategorie{
  id:string, 
  name:string

}

export interface ICategorieProduct{
  images:{
    image:string,
  }[]
  oldPrice:number
  note:number
  id:string
  price:number
  updatePrice:number
  name:string
  description:string
  quantity:number
  cmdQuantity:number
  highPrice:number
  discountPercentage:string
}

export interface IGetCategorieProductsResponse{
  GetSubCategory:{
    id:string,
    name:string,
    products:ICategorieProduct[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetCategorieProductsService extends Query<IGetCategorieProductsResponse>{

  override document = gql`
  query($id:Int){
  GetSubCategory(id:$id){
    id
    name
    products{
    id
      images{
        image
      }
    highPrice
    discountPercentage
    price
    quantity
    name
    description
    }
  }
}
  `;
}
