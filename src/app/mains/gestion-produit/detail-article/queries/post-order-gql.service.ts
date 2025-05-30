import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface IOrder {
  orderNumber: string
  orderDate: string
  id: string
  deliveryAddress: string
}
export interface IError{
   errors: string[]
}
export interface IPostOrderResponse {
  CreateOrder:{
     errors: IError
     success:boolean
     order:IOrder
  }
}

@Injectable({
  providedIn: 'root'
})
export class PostOrderGqlService extends Mutation<IPostOrderResponse>{

  override document = gql`
  mutation($userId:Int!, $deliveryAddress:String!){
  CreateOrder(deliveryAddress:$deliveryAddress,userId:$userId){
    errors
    success
    order{
      orderNumber
      orderDate
      id
      deliveryAddress
    }
    
  }
}
  `;
}
