import { Injectable } from '@angular/core';
import { ICategorieProduct } from './get-categorie-products.service';
import { gql, Query } from 'apollo-angular';

export interface IGetPromoProductResponse{
  GetProductsBySpecialCategory:ICategorieProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class GetPromoProductService extends Query<IGetPromoProductResponse>{

  override document  = gql`
  query($categoryId:Int!){
  GetProductsBySpecialCategory(categoryId:$categoryId){
    id
    name
    price
    quantity
    highPrice
    discountPercentage
    description
    images{
      image
    }
  }
  
}
  `;
}
