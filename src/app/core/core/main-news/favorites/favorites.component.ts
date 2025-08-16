import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { PromoNavService } from '../services/promo-nav.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
  favorites:ICategorieProduct[] = []
  user:IUser | null = null;
  isEmpty:boolean = false;

  constructor(
    private store:StoreService,
    private promoService:PromoNavService
  ){

  }

  ngOnInit(): void {
    this.store.userData$.subscribe(res=>{
      console.log('userData',res);
      if(res){
        this.user = res
        this.getUserFavorite(+res?.id)
      }
    })
  }

  getUserFavorite(userId:number){
    this.store.loader = true
    this.promoService.getFavorite({userId:userId}).then(
      (res)=>{
        console.log('get favorite', res);
        this.favorites = res.getFavoriteProducts
        this.store.loader = false
        if(this.favorites?.length == 0){
          this.isEmpty = true
        }
      },(err)=>{
        this.store.loader = false
        console.log('erreur get favorite', err)
      }
    )
  }

  removeFavorite(favori:ICategorieProduct){
    console.log('remove favorite', favori, this.user);
    
    if(this.user && favori){
      this.removeUserFavorite(this.user?.id, favori?.id)
    }
  }

    removeUserFavorite(userId:string, productId:string){
      this.store.loader = true
    this.promoService.deleteFavorite({userId: +userId, productId:+productId}).then(
      (res)=>{
        this.store.loader = false
        console.log('delete favorite', res);
        if(res.removeFavoriteProduct.success){
          this.favorites = this.favorites.filter(favorite=>favorite?.id !== productId)
          this.store.addedMessage = 'Article retiré de vos favoris'
          this.store.showAddedAlert = true
          setTimeout(() => {          
            this.store.showAddedAlert = false
          }, 3000);
          if(this.favorites?.length == 0){
            this.isEmpty = true
          }
        }
      },(err)=>{
        this.store.loader = false
      }
    )
  }

}
