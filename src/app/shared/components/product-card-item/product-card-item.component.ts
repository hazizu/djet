import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent {
  isAdded:boolean = false;
  isLiked:boolean = false;
  @Input() productData ?: ICategorieProduct

  constructor(
    private router:Router,
    private store:StoreService,
    private panierService:PanierService
  ){}

      getBackgroundImage(): string {
  const image = this.productData?.images[0]?.image;
  return image ? `url(${image})` : '';
}

  getAddedNumber(number:number){
    console.log(number);

  }
  addToPanier(event:MouseEvent){
    event.stopPropagation();

     if(this.productData){
      this.productData.quantity = 1;
      this.productData.price = Number(this.productData.price);
      this.productData.updatePrice = Number(this.productData.price);
      this.panierService.addToPanier(this.productData)
      console.log('panier', this.panierService.getPanier());
      
    }

    this.store.showAddedAlert = true
    setTimeout(() => {
      this.store.showAddedAlert = false
    }, 3000);
    
   
  }
  liked(event:MouseEvent){
    event.stopPropagation();
    this.isLiked =!this.isLiked;
    console.log(this.isLiked);
  }
  goToDetail(){
    this.router.navigate(['/home/articles/detail', this.productData?.id])
 }

}
