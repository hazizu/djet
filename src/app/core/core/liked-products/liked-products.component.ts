import { Component } from '@angular/core';
import { IProductData } from '../week-product/week-product.component';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

@Component({
  selector: 'app-liked-products',
  templateUrl: './liked-products.component.html',
  styleUrls: ['./liked-products.component.scss']
})
export class LikedProductsComponent {

  productData:ICategorieProduct[] = []

}
