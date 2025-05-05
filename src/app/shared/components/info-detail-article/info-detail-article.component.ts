import { Component, Input } from '@angular/core';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-info-detail-article',
  templateUrl: './info-detail-article.component.html',
  styleUrls: ['./info-detail-article.component.scss']
})
export class InfoDetailArticleComponent {
 
@Input() article?:Article
isLiked:boolean = false;

liked(){
  this.isLiked =!this.isLiked;
  console.log(this.isLiked);
}
}
