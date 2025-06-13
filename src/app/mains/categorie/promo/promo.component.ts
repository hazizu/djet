import { Component } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';
import { ICategorieProduct } from '../queries/get-categorie-products.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  productData:ICategorieProduct[] = []
   
}
