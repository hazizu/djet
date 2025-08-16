import { Injectable } from '@angular/core';
import { GetPromoCategorieGqlService, IGetPromoNavResponse } from '../queries/get-promo-categorie-gql.service';
import { StoreService } from 'src/app/core/services/store.service';
import { DeleteFavoriteGqlService, IDeleteFavoriteResponse } from '../queries/delete-favorite-gql.service';
import { GetFavoriteGqlService, IGetFavoriteResponse } from '../queries/get-favorite-gql.service';
import { IPostFavoriteResponse, PostFavoriteGqlService } from '../queries/post-favorite-gql.service';

@Injectable({
  providedIn: 'root'
})
export class PromoNavService {

  constructor(
    private getPromoNavGqlService:GetPromoCategorieGqlService,
    private store:StoreService,
    private postFavoriteGqlService:PostFavoriteGqlService,
    private deleteFavoriteGqlService:DeleteFavoriteGqlService,
    private getFavoriteGqlService:GetFavoriteGqlService

  ) { }

  searchPromoNav(query:{} | undefined = undefined):Promise<IGetPromoNavResponse>{
    return new Promise((resolve, reject) => {
      this.getPromoNavGqlService.fetch(query, {fetchPolicy: 'no-cache'}).subscribe({
        next: (e) => {
          if(e.data){
            resolve(e.data)
          }
        },
        error: (err) => {
          reject(err.graphQLErrors)
        }
      })
    })
  }

  getPromoNav(){
    this.store.loader = true
    this.searchPromoNav().then(
      (res)=>{
        this.store.promoNavData = res.GetSpecialCategories
        this.store.loader = false
        console.log('promo nav', res);
      },(err)=>{
        this.store.loader = false
        console.log('erreur promo nav', err)
      }
    )
  }

  postFavorite(query:{} | undefined = undefined):Promise<IPostFavoriteResponse>{
    return new Promise((resolve, reject) => {
      this.postFavoriteGqlService.mutate(query, {fetchPolicy: 'no-cache'}).subscribe({
        next: (e) => {
          if(e.data){
            resolve(e.data)
          }
        },
        error: (err) => {
          reject(err.graphQLErrors)
        }
      })
    })

  }

  getFavorite(query:{} | undefined = undefined):Promise<IGetFavoriteResponse>{
    return new Promise((resolve, reject) => {
      this.getFavoriteGqlService.fetch(query, {fetchPolicy: 'no-cache'}).subscribe({
        next: (e) => {
          if(e.data){
            resolve(e.data)
          }
        },
        error: (err) => {
          reject(err.graphQLErrors)
        }
      })
    })
}

deleteFavorite(query:{} | undefined = undefined):Promise<IDeleteFavoriteResponse>{
    return new Promise((resolve, reject) => {
      this.deleteFavoriteGqlService.mutate(query, {fetchPolicy: 'no-cache'}).subscribe({
        next: (e) => {
          if(e.data){
            resolve(e.data)
          }
        },
        error: (err) => {
          reject(err.graphQLErrors)
        }
      })
    })
}
}
