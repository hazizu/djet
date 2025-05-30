import { Injectable } from '@angular/core';
import { IError, IOrder } from './post-order-gql.service';
import { gql, Mutation } from 'apollo-angular';

export interface ILinkArticleToOrderResponse {
  AddItemToOrder:{
    errors:IError
    success:boolean
    order:IOrder
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class LinkArticleToOrderGqlService extends Mutation<ILinkArticleToOrderResponse>{

  override document = gql`
  mutation($orderId:Int!,$name:String!,$price:Float!,$productId:Int!, $quantity:Int!, $updatePrice:Float!){
  AddItemToOrder(
    orderId:$orderId,
    name:$name,
    price:$price,
    productId:$productId,
    quantity:$quantity,
    updatePrice:$updatePrice
  ){
    errors
    success
    order{
      id
      orderNumber
      status
      deliveryAddress
    }
  }
}
  
  `;
}
