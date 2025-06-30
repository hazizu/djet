import { Injectable } from '@angular/core';
import { GetCategorieGqlService, IGetCategorieResponse } from '../queries/get-categorie-gql.service';
import { GetCategorieProductsService, IGetCategorieProductsResponse } from '../queries/get-categorie-products.service';
import { GetSubCategirieGqlService, IGetSubcategorieResponse } from '../queries/get-sub-categirie-gql.service';
import { GetPromoProductService, IGetPromoProductResponse } from '../queries/get-promo-product.service';
import { IGetLikedProductResponse, LikedProductGqlService } from '../queries/liked-product-gql.service';
import { IGetWeekProductResponse, WeekProductGqlService } from '../queries/week-product-gql.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private getCategorieGqlService:GetCategorieGqlService,
    private getCategorieProductsService:GetCategorieProductsService,
    private getSubcategorieGqlService:GetSubCategirieGqlService,
    private getPromoProductService:GetPromoProductService,
    private getLikedProductGqlService:LikedProductGqlService,
    private weekProductGqlService:WeekProductGqlService
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

searchWeekProduct(query:{} | undefined = undefined):Promise<IGetWeekProductResponse>{
  return new Promise((resolve, reject)=>{
   this.weekProductGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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

searchLikedProduct(query:{} | undefined = undefined):Promise<IGetLikedProductResponse>{
  return new Promise((resolve, reject)=>{
   this.getLikedProductGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
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
