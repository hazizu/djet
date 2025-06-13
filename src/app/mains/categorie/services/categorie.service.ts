import { Injectable } from '@angular/core';
import { GetCategorieGqlService, IGetCategorieResponse } from '../queries/get-categorie-gql.service';
import { GetCategorieProductsService, IGetCategorieProductsResponse } from '../queries/get-categorie-products.service';
import { GetSubCategirieGqlService, IGetSubcategorieResponse } from '../queries/get-sub-categirie-gql.service';
import { GetPromoProductService, IGetPromoProductResponse } from '../queries/get-promo-product.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private getCategorieGqlService:GetCategorieGqlService,
    private getCategorieProductsService:GetCategorieProductsService,
    private getSubcategorieGqlService:GetSubCategirieGqlService,
    private getPromoProductService:GetPromoProductService
  ) { }

  getCategorie(query:{} | undefined = undefined):Promise<IGetCategorieResponse>{
    return new Promise((resolve, reject)=>{
      this.getCategorieGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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

  getCategorieProducts(query:{} | undefined = undefined):Promise<IGetCategorieProductsResponse>{
    return new Promise((resolve, reject)=>{
      this.getCategorieProductsService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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

  getSubcategorie(query:{} | undefined = undefined):Promise<IGetSubcategorieResponse>{
    return new Promise((resolve, reject)=>{
      this.getSubcategorieGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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

searchPromoProduct(query:{} | undefined = undefined):Promise<IGetPromoProductResponse>{
  return new Promise((resolve, reject)=>{
   this.getPromoProductService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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
