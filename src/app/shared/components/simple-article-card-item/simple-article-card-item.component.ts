import { Component, Input } from '@angular/core';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-simple-article-card-item',
  templateUrl: './simple-article-card-item.component.html',
  styleUrls: ['./simple-article-card-item.component.scss']
})
export class SimpleArticleCardItemComponent {
  isAdded:boolean = false;
  isLiked:boolean = false;
  @Input() productData ?: Article
  addToPanier(){}
  
  liked(){
    this.isLiked =!this.isLiked;
    console.log(this.isLiked);
  }
}
