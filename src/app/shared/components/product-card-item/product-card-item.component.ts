import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router:Router
  ){}

  getAddedNumber(number:number){
    console.log(number);

  }
  addToPanier(event:MouseEvent){
    event.stopPropagation();
    this.isAdded = !this.isAdded;
    console.log("add to panier");
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
