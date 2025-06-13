import { Injectable } from '@angular/core';
import { GetPromoCategorieGqlService, IGetPromoNavResponse } from '../queries/get-promo-categorie-gql.service';
import { StoreService } from 'src/app/core/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class PromoNavService {

  constructor(
    private getPromoNavGqlService:GetPromoCategorieGqlService,
    private store:StoreService
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
}
