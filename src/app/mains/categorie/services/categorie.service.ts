import { Injectable } from '@angular/core';
import { GetCategorieGqlService, IGetCategorieResponse } from '../queries/get-categorie-gql.service';
import { GetCategorieProductsService, IGetCategorieProductsResponse } from '../queries/get-categorie-products.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private getCategorieGqlService:GetCategorieGqlService,
    private getCategorieProductsService:GetCategorieProductsService
  ) { }

  getCategorie(query:{} | undefined = undefined):Promise<IGetCategorieResponse>{
    return new Promise((resolve, reject)=>{
      this.getCategorieGqlService.fetch(query, {fetchPolicy:'no-cache'}).subscribe({
        next:(e)=>{
          if(e.data){
            resolve(e.data)
          }
        },error:(e)=>{
          reject(e)
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
          reject(e)
        }
      })
    })

  } 
}
