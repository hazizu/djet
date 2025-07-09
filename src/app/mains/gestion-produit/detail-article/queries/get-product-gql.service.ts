import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

export interface IGetProductResponse{
  GetProduct:ICategorieProduct
}

@Injectable({
  providedIn: 'root'
})
export class GetProductGqlService extends Query<IGetProductResponse>{

  override document = gql`
  query($id:Int, $name:String){
  GetProduct(id:$id, name:$name){
    price
    name
    quantity
    id
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
