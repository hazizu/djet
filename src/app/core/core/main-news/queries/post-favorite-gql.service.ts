import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface IPostFavorite{
  success:boolean
  errors:string[]
}

export interface IPostFavoriteResponse{
  addFavoriteProduct:IPostFavorite
}

@Injectable({
  providedIn: 'root'
})
export class PostFavoriteGqlService extends Mutation<IPostFavoriteResponse>{
override document = gql`
mutation($userId:Int!, $productId:Int!) {
  addFavoriteProduct(userId:$userId, productId:$productId) {
    success
    errors
  }
}
`;
  
}
