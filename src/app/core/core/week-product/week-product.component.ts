import { Component } from '@angular/core';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

export interface IProductData {
  image: string,
  name: string,
  price: number,
}

@Component({
  selector: 'app-week-product',
  templateUrl: './week-product.component.html',
  styleUrls: ['./week-product.component.scss']
})
export class WeekProductComponent {
  productData:ICategorieProduct[] = []
}
