import { Component } from '@angular/core';

export interface IMainNews {
  image:string,
  title1:string,
  title2:string,
  routerName:string,
  
}

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent {

  mainNews: IMainNews[] = [
    {
      image: './../../../../assets/png/new1.png',
      title1: 'le top de la thech',
      title2: 'Tendances',
      routerName:"tendance"
    },
    {
      image: './../../../../assets/png/new2.png',
      title1: 'Pour tous les portefeuilles',
      title2: 'Promos',
      routerName:"promo"
    },
    {
      image: './../../../../assets/png/new3.png',
      title1: 'À ne pas louper',
      title2: 'Meilleurs ventes',
      routerName:"meilleure-vente"
    } 
    
  ]

}
