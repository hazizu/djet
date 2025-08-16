import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromoNavService } from 'src/app/core/core/main-news/services/promo-nav.service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-info-detail-article',
  templateUrl: './info-detail-article.component.html',
  styleUrls: ['./info-detail-article.component.scss']
})
export class InfoDetailArticleComponent implements OnInit {
 
@Input() article?:ICategorieProduct
isLiked:boolean = false;
user:IUser | null = null;
constructor(
  private panierService:PanierService,
  private store:StoreService,
  private promoService:PromoNavService,
  private authGardService:AuthGuardService,
  private router:Router
){

} 

ngOnInit(): void {
   this.store.userData$.subscribe((res)=>{
      console.log('userData',res);
      this.user = res;
      
    })
}

liked(){
  this.isLiked =!this.isLiked;
  console.log(this.isLiked);

   const isAuth = this.authGardService.isAuthenticated();
    if(isAuth){
      if(this.isLiked){
        if(this.user && this.article){
          this.postUserFavorite(this.user?.id, this.article?.id)
        }
      }else{
        //remove favorite
        if(this.user && this.article){
          this.removeUserFavorite(this.user?.id, this.article?.id)
        }
      }
    }else{
      this.router.navigate(['/auth/login'])
    }


}


  postUserFavorite(userId:string, productId:string){
    this.promoService.postFavorite({userId: +userId, productId:+productId}).then(
      (res)=>{
        console.log('post favorite', res);
        if(res.addFavoriteProduct.success){
          this.store.addedMessage = 'Cet article a été ajouté à votre liste de favoris'
          this.store.showAddedAlert = true
          setTimeout(() => {          
            this.store.showAddedAlert = false
          }, 3000);
        }
      }
    )
  }

  removeUserFavorite(userId:string, productId:string){
    this.promoService.deleteFavorite({userId: +userId, productId:+productId}).then(
      (res)=>{
        console.log('delete favorite', res);
        if(res.removeFavoriteProduct.success){
          this.store.addedMessage = 'Article retiré de vos favoris'
          this.store.showAddedAlert = true
          setTimeout(() => {          
            this.store.showAddedAlert = false
          }, 3000);
        }
      }
    )
  }

addToPanier(){

  if(this.article){
    const copyArticle = {...this.article}
    
    copyArticle.cmdQuantity = 1;
    copyArticle.price = Number(copyArticle.price);
    copyArticle.updatePrice = Number(copyArticle.price);
    this.panierService.addToPanier(copyArticle)
    console.log('panier', this.panierService.getPanier());
    
  }
   this.store.addedMessage = 'Article ajouté avec succès'
  this.store.showAddedAlert = true
  setTimeout(() => {
    this.store.showAddedAlert = false
  }, 3000);

}
}
