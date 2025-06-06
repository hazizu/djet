import { Injectable } from '@angular/core';
import { IOrder } from './post-order-gql.service';
import { IOrderProductItem } from 'src/app/shared/components/order-product-item/order-product-item.component';
import { gql, Query } from 'apollo-angular';
export interface IGetOrderByIdResponse{
GetOrderById:IOrderProductItem
} 

@Injectable({
  providedIn: 'root'
})
export class GetOrderByIdService extends Query<IGetOrderByIdResponse>{

  override document = gql`
  query($orderId:Int!){
  GetOrderById(orderId:$orderId){
    status
    deliveryAddress
    id
    orderDate
    orderNumber
    total
    items{
      quantity
      product{
        name
        id
        price
        description
        images{
          image
        }
      }
      
    }
    
  }
}
  
  `;
}
