import { Component } from '@angular/core';
import { IMainNews } from '../main-news/main-news.component';

@Component({
  selector: 'app-sub-main-news',
  templateUrl: './sub-main-news.component.html',
  styleUrls: ['./sub-main-news.component.scss']
})
export class SubMainNewsComponent {
  mainNews: IMainNews[] = [
    {
      image: './../../../../assets/SVG/sub-new1.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Smartphones',
      routerName:''
    },
    {
      image: './../../../../assets/SVG/sub-new4.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'PC & Mac',
      routerName:''
    },
    {
      image: './../../../../assets/SVG/sub-new3.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Gaming',
      routerName:''
    } ,
    {
      image: './../../../../assets/SVG/sub-new4.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Stockage',
      routerName:''
    } ,
    {
      image: './../../../../assets/SVG/sub-new1.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Audio & vidéo',
      routerName:''
    } 
    
  ]

}
