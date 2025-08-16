import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent {
@Input() favoriteArticle?:ICategorieProduct
@Output() deleteUserFavorite:EventEmitter<any> = new EventEmitter<any>()

constructor(
  private router:Router,
  private panierService:PanierService,
  private store:StoreService
){}



  getBackgroundImage(): string {
  const image = this.favoriteArticle?.images[0]?.image;
  return image ? `url(${image})` : '';
}

deleteFavorite(event:MouseEvent){
  event.stopPropagation();
  this.deleteUserFavorite.emit(this.favoriteArticle)
}

goToDetail(){
  this.router.navigate(['/home/articles/detail', this.favoriteArticle?.id]);
}

addToPanier(event:MouseEvent){
  event.stopPropagation();
   if(this.favoriteArticle){
      this.favoriteArticle.cmdQuantity = 1;
      this.favoriteArticle.price = Number(this.favoriteArticle.price);
      this.favoriteArticle.updatePrice = Number(this.favoriteArticle.price);
      this.panierService.addToPanier(this.favoriteArticle)
      console.log('panier', this.panierService.getPanier());
      
    }
    this.store.addedMessage = 'Article ajouté avec succès'
    this.store.showAddedAlert = true
    setTimeout(() => {          
      this.store.showAddedAlert = false
    }, 3000);

}

}


