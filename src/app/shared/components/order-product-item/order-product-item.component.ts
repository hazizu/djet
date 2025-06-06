import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface IOrderProductItem {
id:number
orderNumber:string
status:string
deliveryAddress:string
total:number
  items:{
    id:string
    quantity:number
    product:{
      id:string
      descition:string
      price:number
      name:string
      images:{
        image:string
      }[]
    }
  }[]
}

@Component({
  selector: 'app-order-product-item',
  templateUrl: './order-product-item.component.html',
  styleUrls: ['./order-product-item.component.scss']
})
export class OrderProductItemComponent {
  @Input() orderProductItem?:IOrderProductItem

constructor(
  private router:Router
){

}

  getBackgroundImage(): string {
  const image = this.orderProductItem?.items?.[0]?.product?.images?.[0]?.image;
  return image ? `url(${image})` : '';
}


goToDetail(){
  this.router.navigate(['/home/commandes', this.orderProductItem?.id]);
}

}
