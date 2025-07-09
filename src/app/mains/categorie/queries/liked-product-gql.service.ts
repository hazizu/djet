import { Injectable } from '@angular/core';
import { ICategorieProduct } from './get-categorie-products.service';
import { gql, Query } from 'apollo-angular';

export interface IGetLikedProductResponse{
  GetRecommendedProducts:ICategorieProduct[]
}
@Injectable({
  providedIn: 'root'
})
export class LikedProductGqlService extends Query<IGetLikedProductResponse>{

  override document = gql`
  query{
  GetRecommendedProducts {
    name
    id
    quantity
    price
    description
    highPrice
    discountPercentage
    images {
      image
    }
  }
}
  `;
}
