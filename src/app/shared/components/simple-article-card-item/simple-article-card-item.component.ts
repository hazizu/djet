import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-simple-article-card-item',
  templateUrl: './simple-article-card-item.component.html',
  styleUrls: ['./simple-article-card-item.component.scss']
})
export class SimpleArticleCardItemComponent {

  isAdded:boolean = false;
  isLiked:boolean = false;
  @Input() productData ?: ICategorieProduct;

  constructor(
    private router:Router
  ){}
  addToPanier(event:MouseEvent){
    event.stopPropagation();

  }
  
  liked(){
    this.isLiked =!this.isLiked;
    console.log(this.isLiked);
  }
  goToDetail(){
     this.router.navigate(['/home/articles/detail', this.productData?.id]);
  }
  get firstImageUrl(): string | null {
    return this.productData?.images?.[0]?.image ?? null;
  }
}
