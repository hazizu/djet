import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface IGetOrderArticle {
      id:number
    status:string
    orderNumber:string
    items:{
      id:string
      quantity:number
      product:{
         name:string
        images:{
          image:string
        }[]
      }
      
    }[]

}

export interface IGetOrderArticleResponse {
  GetOrdersByUser:IGetOrderArticle[]
}

@Injectable({
  providedIn: 'root'
})
export class GetOrderArticleGqlService extends Query<IGetOrderArticleResponse>{

  override document = gql`
  query($userId:Int!){
  GetOrdersByUser(userId:$userId){
    id
    status
    orderNumber
    total
    items{
      id
      quantity
      product{
        name
        images{
          image
        }
      }
      
    }
    
  }
} 
  `;
}
