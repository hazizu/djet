import { Injectable } from '@angular/core';
import { GetProductGqlService, IGetProductResponse } from '../queries/get-product-gql.service';
import { GetSimilarArticleResponse, GetSimilarGqlService } from '../queries/get-similar-gql.service';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(
    private getProductGqlService:GetProductGqlService,
    private getSimilarArticleGqlService:GetSimilarGqlService
  ) { }

  getProduct(query:{} | undefined = undefined):Promise<IGetProductResponse>{
    return new Promise((resolve, reject) => {
      this.getProductGqlService.fetch(query).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err.graphQLErrors)
          }
        }
      )
    })

  }

  getSimilarArticle(query:{} | undefined = undefined):Promise<GetSimilarArticleResponse>{
    return new Promise((resolve, reject) => {
      this.getSimilarArticleGqlService.fetch(query).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err.graphQLErrors)
          }
        }
      )
    })
  }
}
