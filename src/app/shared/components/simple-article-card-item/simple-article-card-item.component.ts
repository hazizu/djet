import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromoNavService } from 'src/app/core/core/main-news/services/promo-nav.service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { PanierService } from 'src/app/mains/gestion-produit/panier/panier.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

@Component({
  selector: 'app-simple-article-card-item',
  templateUrl: './simple-article-card-item.component.html',
  styleUrls: ['./simple-article-card-item.component.scss']
})
export class SimpleArticleCardItemComponent implements OnInit{

  isAdded:boolean = false;
  isLiked:boolean = false;
  user:IUser | null = null;
  @Input() productData ?: ICategorieProduct;

  constructor(
    private router:Router,
    private store:StoreService,
    private panierService:PanierService,
    private authGardService:AuthGuardService,
    private promoService:PromoNavService
  ){}

  ngOnInit(): void {
   
    this.store.userData$.subscribe((res)=>{
      
      this.user = res;
      
    })
  }
  addToPanier(event:MouseEvent){
    event.stopPropagation();

    if(this.productData){
      this.productData.cmdQuantity = 1;
      this.productData.price = Number(this.productData.price);
      this.productData.updatePrice = Number(this.productData.price);
      this.panierService.addToPanier(this.productData)
      console.log('panier', this.panierService.getPanier());
      
    }
    this.store.addedMessage = 'Article ajouté avec succès'
    this.store.showAddedAlert = true
    setTimeout(() => {          
      this.store.showAddedAlert = false
    }, 3000);

  }
  
  liked(event:MouseEvent){
    console.log(this.user)
    event.stopPropagation();
    this.isLiked =!this.isLiked;
    console.log(this.isLiked);

    const isAuth = this.authGardService.isAuthenticated();
    if(isAuth){
      if(this.isLiked){
        if(this.user && this.productData){
          this.postUserFavorite(this.user?.id, this.productData?.id)
        }
      
      }else{
        //remove favorite
        if(this.user && this.productData){
           this.removeUserFavorite(this.user?.id, this.productData?.id)
        }
      }
    }else{
      this.router.navigate(['/auth/login'])
    }
  }


  goToDetail(){
    if(this.router.url.includes('/home/articles/detail')){
       this.router.navigate(['/home/articles/detail', this.productData?.id]);
       setTimeout(() => {
        window.location.reload();
       }, 0);
      
    }else{
      this.router.navigate(['/home/articles/detail', this.productData?.id]);
    }
    
    
  }
  get firstImageUrl(): string | null {
    return this.productData?.images?.[0]?.image ?? null;
  }

  postUserFavorite(userId:string, productId:string){
    this.promoService.postFavorite({userId: +userId, productId:+productId}).then(
      (res)=>{
        console.log('post favorite', res);
        if(res.addFavoriteProduct.success){
          this.store.addedMessage = 'Cet article a été ajouté à votre liste de favoris'
          this.store.showAddedAlert = true
          console.log('added alert', this.store.showAddedAlert)
          
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
}
