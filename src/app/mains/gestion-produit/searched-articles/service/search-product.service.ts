import { Injectable } from '@angular/core';
import { FilterProductGqlService, IfilterProductResponse } from '../queries/filter-product-gql.service';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  constructor(private filterProductGqlService:FilterProductGqlService) {

   }

   searchProductBywords(query:{} | undefined = undefined):Promise<IfilterProductResponse>{
     return new Promise((resolve, reject)=>{
       this.filterProductGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
         next:(e)=>{
           if(e.data){
             resolve(e.data)
           }
         },error:(e)=>{
           reject(e.graphQLErrors)
         }
       })
     })
   }
}
