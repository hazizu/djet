import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { GestionOrderService } from 'src/app/mains/gestion-produit/detail-article/services/gestion-order.service';
import { StoreService } from '../../services/store.service';
import { IProductData } from '../week-product/week-product.component';
import { DatePipe } from '@angular/common';

export interface IOrderDetailProduct{
  id:string
  quantity:number
    product:{
    descition:string
    quantity?:number
    id:string
    name:string
    price:number
    images:{
      image:string
    }[]
  }
}

@Component({
  selector: 'app-my-commande-detail',
  templateUrl: './my-commande-detail.component.html',
  styleUrls: ['./my-commande-detail.component.scss']
})
export class MyCommandeDetailComponent implements OnInit{
  products?:IOrderDetailProduct[]= []
  orderData?:{total:number, status:string, orderNumber:string, orderDate?:string, deliveryAddress:string}
   command_id:string = ""
  constructor(
    private gestionOrderService:GestionOrderService,
    private route:ActivatedRoute,

    private store:StoreService,
    public datePipe: DatePipe
  ){

  }
  ngOnInit(): void {
      this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this.command_id = params?.get('id') as string
      this.getOrder(+this.command_id)
    })
    
  }

  getOrder(commande_id:number){
    this.store.loader = true
    this.gestionOrderService.getOrderById({orderId:commande_id}).then(
      (res)=>{
        console.log('order', res);
        
        this.store.loader = false
        this.products = res.GetOrderById.items
       
        this.products.map((item)=>{
          item.product.quantity = item.quantity
        })
         console.log('products',this.products)
        
        this.orderData = res.GetOrderById
        // this.orderData?.total = res.GetOrderById.total
        // this.orderData.status = res.GetOrderById.status
        // this.orderData.orderNumber = res.GetOrderById.orderNumber
      },(err)=>{
        this.store.loader = false
        console.log('erreur get order',err)
      }
    )

  }

  

}
