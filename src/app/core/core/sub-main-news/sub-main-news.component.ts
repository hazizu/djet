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
      pathName:'smartphones'
    },
    {
      image: './../../../../assets/SVG/sub-new4.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'PC & Mac',
      pathName:'pc-mac'
    },
    {
      image: './../../../../assets/SVG/sub-new3.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Gaming',
      pathName:'gaming'
    } ,
    {
      image: './../../../../assets/SVG/sub-new4.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Stockage',
      pathName:'stockage'
    } ,
    {
      image: './../../../../assets/SVG/sub-new1.svg',
      title1: 'la meilleure garantie en terme de smartphone',
      title2: 'Audio & vidéo',
      pathName:'audio-video'
    } 
    
  ]

}
