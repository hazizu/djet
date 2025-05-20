import { Component, OnInit } from '@angular/core';
import { PanierService } from './panier.service';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';
import { IGarantie } from 'src/app/shared/components/garantie-item/garantie-item.component';
import { Router } from '@angular/router';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';

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

    productData:ICategorieProduct[] = [
    {
      images:[{image:'./../../../../assets/SVG/product1.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product2.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product3.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product1.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product2.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product3.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    {
      images:[{image:'./../../../../assets/SVG/product1.svg'}],
      updatePrice:120000,
      oldPrice:120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description:"",
      id:"1",
      note:1,
      quantity:1
    },
    ]


  constructor(
    private panierService:PanierService,
    public router:Router
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
    
  }

  goToHome(){
    this.router.navigate(['/home']);

  }
  goToValide(){
    this.router.navigate(['/home/articles/user/valide-commande'])
  }

}
