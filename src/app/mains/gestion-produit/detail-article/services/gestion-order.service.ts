import { Injectable } from '@angular/core';
import { IPostOrderResponse, PostOrderGqlService } from '../queries/post-order-gql.service';
import { ILinkArticleToOrderResponse, LinkArticleToOrderGqlService } from '../queries/link-article-to-order-gql.service';

@Injectable({
  providedIn: 'root'
})
export class GestionOrderService {

  constructor(
    private postOrderGqlService:PostOrderGqlService,
    private linkArticleToOrderGqlService:LinkArticleToOrderGqlService
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
}
