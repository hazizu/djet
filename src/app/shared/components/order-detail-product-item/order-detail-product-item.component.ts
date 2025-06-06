import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProductData } from 'src/app/core/core/week-product/week-product.component';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

@Component({
  selector: 'app-order-detail-product-item',
  templateUrl: './order-detail-product-item.component.html',
  styleUrls: ['./order-detail-product-item.component.scss']
})
export class OrderDetailProductItemComponent {
  @Input() product?:any

  constructor(
    private router:Router
  ){}

    getBackgroundImage(): string {
  const image = this.product?.images[0]?.image;
  return image ? `url(${image})` : '';
}



}
