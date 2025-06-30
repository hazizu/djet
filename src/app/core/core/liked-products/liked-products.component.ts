import { Component, OnInit } from '@angular/core';
import { IProductData } from '../week-product/week-product.component';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { CategorieService } from 'src/app/mains/categorie/services/categorie.service';

@Component({
  selector: 'app-liked-products',
  templateUrl: './liked-products.component.html',
  styleUrls: ['./liked-products.component.scss']
})
export class LikedProductsComponent implements OnInit{
 productData:ICategorieProduct[] = []
  constructor(private categorieSevice:CategorieService) {

  }

  ngOnInit(): void {
    this.getLikedProducts()
    
  }

  getLikedProducts(){
    this.categorieSevice.searchLikedProduct().then((res)=>{
      console.log('liked product', res);
      this.productData = res.GetRecommendedProducts
    })

 

}
}
