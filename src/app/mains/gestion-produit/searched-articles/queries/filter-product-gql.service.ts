import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

export interface IfilterProductResponse{
  SearchProducts:ICategorieProduct[]
}
@Injectable({
  providedIn: 'root'
})
export class FilterProductGqlService extends Query<IfilterProductResponse>{

  override document = gql`
  query($searchTerm:String){
  SearchProducts(searchTerm:$searchTerm){
    id
    name
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
