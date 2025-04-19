import { Component, Input } from '@angular/core';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent {
  isAdded:boolean = false;
  isLiked:boolean = false;
  @Input() productData ?: Article

  getAddedNumber(number:number){
    console.log(number);

  }
  addToPanier(){
    this.isAdded = !this.isAdded;
    console.log("add to panier");
  }
  liked(){
    
    this.isLiked =!this.isLiked;
    console.log(this.isLiked);
  }

}
