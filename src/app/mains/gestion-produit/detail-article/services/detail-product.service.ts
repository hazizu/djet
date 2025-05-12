import { Injectable } from '@angular/core';
import { GetProductGqlService, IGetProductResponse } from '../queries/get-product-gql.service';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(
    private getProductGqlService:GetProductGqlService,
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
}
