import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

export interface IGetFavoriteResponse{
  getFavoriteProducts:ICategorieProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class GetFavoriteGqlService extends Query<IGetFavoriteResponse>{

  override document = gql`
  query($userId:Int!) {
  getFavoriteProducts(userId:$userId) {
    id
    name
    price
    images {
      image
    }
    description
    highPrice
    quantity
    discountPercentage
  }
}
  `;
}
