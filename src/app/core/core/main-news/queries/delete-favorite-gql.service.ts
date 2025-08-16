import { Injectable } from '@angular/core';
import { IPostFavorite } from './post-favorite-gql.service';
import { gql, Mutation } from 'apollo-angular';

export interface IDeleteFavoriteResponse{
  removeFavoriteProduct:IPostFavorite
}

@Injectable({
  providedIn: 'root'
})
export class DeleteFavoriteGqlService extends Mutation<IDeleteFavoriteResponse>{

  override document = gql`
  mutation($userId:Int!, $productId:Int!) {
  removeFavoriteProduct(userId:$userId, productId:$productId) {
    success
    errors
  }
}
  `;
}
