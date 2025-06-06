import { Injectable } from '@angular/core';
import { IPostOrderResponse, PostOrderGqlService } from '../queries/post-order-gql.service';
import { ILinkArticleToOrderResponse, LinkArticleToOrderGqlService } from '../queries/link-article-to-order-gql.service';
import { GetOrderArticleGqlService, IGetOrderArticleResponse } from '../queries/get-order-article-gql.service';
import { GetOrderByIdService, IGetOrderByIdResponse } from '../queries/get-order-by-id.service';

@Injectable({
  providedIn: 'root'
})
export class GestionOrderService {

  constructor(
    private postOrderGqlService:PostOrderGqlService,
    private linkArticleToOrderGqlService:LinkArticleToOrderGqlService,
    private getOrderArticleGqlService:GetOrderArticleGqlService,
    private getOrderByIdGqlService:GetOrderByIdService
  ) { }

  createOrder(query:{} | undefined = undefined):Promise<IPostOrderResponse>{
    return new Promise((resolve, reject)=>{
      this.postOrderGqlService.mutate(query,{fetchPolicy:'no-cache'}).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err)
          }
        }
      )
    })
  }

  linkArticleToOrder(query:{} | undefined = undefined):Promise<ILinkArticleToOrderResponse>{
    return new Promise((resolve, reject)=>{
      this.linkArticleToOrderGqlService.mutate(query,{fetchPolicy:'no-cache'}).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err)
          }
        }
      )
    })
  }

  getUserOerders(query:{} | undefined = undefined):Promise<IGetOrderArticleResponse>{
    return new Promise((resolve, reject)=>{
   this.getOrderArticleGqlService.fetch(query,{fetchPolicy:'no-cache'}).subscribe(
    {
      next:(e)=>{
        if(e.data){
          resolve(e.data)
        }
      },error:(err)=>{
        reject(err)
      }
    }
   )
    })
  }

  getOrderById(query:{} | undefined = undefined):Promise<IGetOrderByIdResponse>{
    return new Promise((resolve, reject)=>{
   this.getOrderByIdGqlService.fetch(query,{fetchPolicy:'no-cache'}).subscribe(
    {
      next:(e)=>{
        if(e.data){
          resolve(e.data)
        }
      },error:(err)=>{
        reject(err)
      }
    }
   )
    })
  }
}
