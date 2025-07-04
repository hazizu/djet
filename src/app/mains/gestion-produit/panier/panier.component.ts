import { Component, OnInit } from '@angular/core';
import { PanierService } from './panier.service';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';
import { IGarantie } from 'src/app/shared/components/garantie-item/garantie-item.component';
import { Router } from '@angular/router';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';
import { CategorieService } from '../../categorie/services/categorie.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit{
  paniers:ICategorieProduct[] = [];
  totalPrices:number = 0;

    garantiesData:IGarantie[]=[
      {
        icon:"./../../../../assets/SVG/livraison-garantie-icon.svg",
        title:"Livraison dans les temps",
        description:"Commandez et recevez votre article dans les 24h avec des frais de livraisons défiants toute concurrence."
      },
      {
        icon:"./../../../../assets/SVG/garantie-icon.svg",
        title:"Articles garanties",
        description:"Nous avons une confiance absolue sur l’origine et la qualité de nos articles, Ils sont donc garantis 1 an."
      },
      {
        icon:"./../../../../assets/SVG/garantie-return-icon.svg",
        title:"Retour d'articles",
        description:"Après réception de vos articles, vous avez 10 jours pour faire un retour. Notre SAV est disponible pour vous."
  
      }
    ]

      produitNavs: CategorieProduitNavItem[] = [
        {
          navName: 'Smartphones & tablettes',
          pathName: 'smartphones',
          image: './../../../../assets/SVG/categorie-produit-smartphone.svg',
        },
        {
          navName: 'PC & MAC',
          pathName: 'pc-mac',
          image: './../../../../assets/SVG/categorie-produit-tablette.svg',
        },
        {
          navName: 'Gaming',
          pathName: 'gaming',
          image: './../../../../assets/SVG/categorie-produit-telephone-portable.svg',
        },
        {
          navName: 'Stockage',
          pathName: 'stockage',
          image: './../../../../assets/SVG/categorie-produit-telephone-fixed.svg',
        },
        {
          navName: 'Audio & vidéo',
          pathName: 'audio-video',
          image: './../../../../assets/SVG/categorie-produit-accessoires.svg',
        }
      ]

    productData:ICategorieProduct[] = []


  constructor(
    private panierService:PanierService,
    public router:Router,
    private categorieSevice:CategorieService,
    private store:StoreService
  ){

  }

  ngOnInit(): void {
    this.panierService.paniers$.subscribe(res=>{
      this.paniers = res;
      this.totalPrices = Number(res.reduce((sum, item)=>{
        return sum + item.updatePrice ;
      },0))
      console.log('le panier',res);
      console.log('total',this.totalPrices, typeof(this.totalPrices))
      
    })
    this.getLikedProducts()
    
  }

  goToHome(){
    this.router.navigate(['/home']);

  }
  goToValide(){
    this.router.navigate(['/home/articles/user/valide-commande'])
  }

    getLikedProducts(){
    this.categorieSevice.searchLikedProduct().then((res)=>{
      console.log('liked product', res);
      this.productData = res.GetRecommendedProducts
    },(err)=>{
      this.store.loader = false
    })
}

}
