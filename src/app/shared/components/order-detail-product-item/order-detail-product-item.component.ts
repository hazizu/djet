import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProductData } from 'src/app/core/core/week-product/week-product.component';
import { StoreService } from 'src/app/core/services/store.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';

@Component({
  selector: 'app-order-detail-product-item',
  templateUrl: './order-detail-product-item.component.html',
  styleUrls: ['./order-detail-product-item.component.scss']
})
export class OrderDetailProductItemComponent {
  @Input() product?:any

  constructor(
    private router:Router,
    private panierService:PanierService,
    private store:StoreService
  ){}

    getBackgroundImage(): string {
  const image = this.product?.images[0]?.image;
  return image ? `url(${image})` : '';
}

addToPanier(){

    if(this.product){
    const copyArticle = {...this.product}
    
    copyArticle.cmdQuantity = 1;
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
