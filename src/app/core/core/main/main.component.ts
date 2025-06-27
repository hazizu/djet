import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/mains/auth/auth/auth.service';
import { PromoNavService } from '../main-news/services/promo-nav.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  showNavPhone :boolean = false
  constructor(
    private authServiceService:AuthService,
    private promoNavService:PromoNavService,
    private store:StoreService
  ){}
  ngOnInit(): void {
    this.authServiceService.getUserData()
    this.authServiceService.getcategories()
    this.promoNavService.getPromoNav()
    const token = localStorage.getItem('token')
    if(!token){
      this.store.isLogout = true;
      
    }else{
      this.store.isLogout = false;
    }
  }
  closeNav(value:boolean){
    this.showNavPhone = false
  }
}
