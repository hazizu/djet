import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-info-detail-article',
  templateUrl: './info-detail-article.component.html',
  styleUrls: ['./info-detail-article.component.scss']
})
export class InfoDetailArticleComponent {
 
@Input() article?:ICategorieProduct
isLiked:boolean = false;
constructor(
  private panierService:PanierService,
  private store:StoreService
){

} 

liked(){
  this.isLiked =!this.isLiked;
  console.log(this.isLiked);
}

addToPanier(){

  if(this.article){
    const copyArticle = {...this.article}
    
    copyArticle.quantity = 1
    copyArticle.price = Number(copyArticle.price);
    copyArticle.updatePrice = Number(copyArticle.price);
    this.panierService.addToPanier(copyArticle)
    console.log('panier', this.panierService.getPanier());
    
  }

  this.store.showAddedAlert = true
  setTimeout(() => {
    this.store.showAddedAlert = false
  }, 3000);

}
}
