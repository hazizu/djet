import { Injectable } from '@angular/core';
import { ICategorieProduct } from './get-categorie-products.service';
import { gql, Query } from 'apollo-angular';

export interface IGetWeekProductResponse{
  GetWeeklyTechOffersBySubCategory:ICategorieProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class WeekProductGqlService extends Query<IGetWeekProductResponse>{

  override document = gql`
  query{
  GetWeeklyTechOffersBySubCategory{
      name
      id
      quantity
      price
      description
      highPrice
      discountPercentage
      images{
        image
      }
  }
}
  `;
}
