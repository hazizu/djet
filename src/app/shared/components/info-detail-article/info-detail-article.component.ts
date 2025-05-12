import { Component, Input } from '@angular/core';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-info-detail-article',
  templateUrl: './info-detail-article.component.html',
  styleUrls: ['./info-detail-article.component.scss']
})
export class InfoDetailArticleComponent {
 
@Input() article?:ICategorieProduct
isLiked:boolean = false;

liked(){
  this.isLiked =!this.isLiked;
  console.log(this.isLiked);
}
}
