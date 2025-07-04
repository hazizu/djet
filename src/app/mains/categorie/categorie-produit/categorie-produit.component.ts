import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';
import { ICategorieProduct, ISubcategorie } from '../queries/get-categorie-products.service';
import { CategorieService } from '../services/categorie.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.scss']
})
export class CategorieProduitComponent implements OnInit{
  categorieName: string = '';
  subCategoreiName: string = '';
  totalCount:number = 500
  subCategories:ISubcategorie[] = []
  categorie_index?:number = 0
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
     private route:ActivatedRoute,
     private categorieService:CategorieService,
    private store:StoreService) {

   }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categorieI:string | null =  params?.get('id')
      console.log('productNae', categorieI);
      categorieI ? this.getSubCategories(+categorieI) : null
      
      // this.produitNavs.forEach((produit)=>{
      //   if(produit.pathName === pathName){
      //     this.produitTitle = produit.navName
      //   }
      // })
      
    })
    
  }
  getSubCategories(categorie_id:number){
    this.store.loader = true
    this.categorieService.getSubcategorie({id:categorie_id}).then(
      (subCategories)=>{
        
        this.store.loader = false
        this.subCategories = subCategories.GetCategory[0].subcategories
        this.categorieName = subCategories.GetCategory[0].name
        this.subCategoreiName = subCategories.GetCategory[0].subcategories[0].name

        // get les produits de la premiere sous catégorie
        this.getProduct(+subCategories.GetCategory[0].subcategories[0].id)
       
      },(err)=>{
        this.store.loader = false
        console.log('erreur', err)
      }
    )
  }
  onChangePage(page:number){
    console.log(page);

  }
  getCategorieProduct(event:ISubcategorie, index:number){
    this.categorie_index = index
    console.log(event);
    this.subCategoreiName = event.name
    this.getProduct(+event.id)
  }

  getProduct(product_id:number){
    this.store.loader = true
    this.categorieService.getCategorieProducts({id:product_id}).then(
      (res)=>{
        this.store.loader = false
        console.log('les produits de la catégorie', res)
       this.productData = res.GetSubCategory.products
      },(err)=>{
        this.store.loader = false
        console.log('erreur', err)
      }
    )
  }


}
