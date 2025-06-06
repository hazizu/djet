import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { GestionOrderService } from 'src/app/mains/gestion-produit/detail-article/services/gestion-order.service';
import { IOrderProductItem } from 'src/app/shared/components/order-product-item/order-product-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

   userData: IUser | null;
   orders:any[] = []
   orderUpdate:any[] = []

  constructor(
    private store:StoreService,
    private gestionOrderService:GestionOrderService,
    private router:Router
  ) { 
    this.userData = null
  }

  ngOnInit(): void {
    this.store.userData$.subscribe(res=>{
      this.userData = res;
      if(res){
      console.log('userdata',res);
      this.getOrders(+res?.id)
      }
     
    })
    
    
  }

  filterCodeChange(filterCode:string){
    console.log('filterCodeChange', filterCode);
    switch(filterCode){
      case 'allOrders':
        this.orderUpdate = this.orders
        break;
      case 'inProgressOrders':
         if (this.orders?.some(order => order?.status === 'PENDING')) {
              this.orderUpdate = this.orders.filter(order=>order?.status === 'PENDING')
         }
        break;
      case 'deliveredOrders':
        if (this.orders?.some(order => order?.status === 'DELIVERED')) {
              this.orderUpdate = this.orders.filter(order=>order?.status === 'DELIVERED')
        }
        break;
      case 'returnedOrders':
        if (this.orders?.some(order => order?.status === 'CANCELLED')) {
            this.orderUpdate = this.orders.filter(order=>order?.status === 'CANCELLED')
        }
        break;
    }
  }

  getOrders(userId:number | undefined){
    this.store.loader = true
    this.gestionOrderService.getUserOerders({userId:userId}).then(
      (res)=>{
       
        this.orders = res.GetOrdersByUser?.filter(order=>order?.items?.length > 0)
        this.orderUpdate = this.orders
         console.log('get orders',res)
         console.log('orders',this.orders)
         
        this.store.loader = false
      },(err)=>{
        this.store.loader = false
        console.log('erreur get orders',err)
      }
    )
   
  }
   goToHome(){
      this.router.navigate(['/home'])
      
    }


}
