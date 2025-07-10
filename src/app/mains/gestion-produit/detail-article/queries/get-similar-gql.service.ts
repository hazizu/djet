import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

export interface GetSimilarArticleResponse{
  GetSimilarProducts:ICategorieProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class GetSimilarGqlService extends Query<GetSimilarArticleResponse>{

  override document = gql`
  query($productId:Int!){
  GetSimilarProducts(productId:$productId){
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
