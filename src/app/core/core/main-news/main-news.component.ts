import { Component, OnInit } from '@angular/core';
import { PromoNavService } from './services/promo-nav.service';
import { IGetPromoNav } from './queries/get-promo-categorie-gql.service';
import { StoreService } from '../../services/store.service';

export interface IMainNews {
  image:string,
  title1:string,
  title2:string,
  pathName:string,
  
}

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent  implements OnInit{
  proomos:IGetPromoNav[] | null = []

  

  mainNews: IMainNews[] = [
    {
      image: './../../../../assets/png/new1.png',
      title1: 'le top de la thech',
      title2: 'Tendances',
      pathName:"tendance"
    },
    {
      image: './../../../../assets/png/new2.png',
      title1: 'Pour tous les portefeuilles',
      title2: 'Promos',
      pathName:"promo"
    },
    {
      image: './../../../../assets/png/new3.png',
      title1: 'À ne pas louper',
      title2: 'Meilleurs ventes',
      pathName:"meilleure-vente"
    } 
    
  ]

  constructor(
    private store:StoreService,
  ){

  }
  ngOnInit(): void {
    this.store.promoNavData$.subscribe((data)=>{
      this.proomos = data
    })
  }

 

}
