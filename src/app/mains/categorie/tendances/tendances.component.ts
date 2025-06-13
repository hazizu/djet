import { Component, OnInit } from '@angular/core';
import { Article } from '../../gestion-produit/searched-articles/searched-articles.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { CategorieService } from '../services/categorie.service';
import { ICategorieProduct } from '../queries/get-categorie-products.service';
import { IGetPromoNav } from 'src/app/core/core/main-news/queries/get-promo-categorie-gql.service';

@Component({
  selector: 'app-tendances',
  templateUrl: './tendances.component.html',
  styleUrls: ['./tendances.component.scss']
})
export class TendancesComponent implements OnInit{
  promoId:string="";
  promoName:string="";
  productData:ICategorieProduct[] = []
   chipIndex?:number 
   promos:IGetPromoNav[] | null = []
  constructor(
    private route:ActivatedRoute,
    private store:StoreService,
    private categorieService:CategorieService,
    public router:Router
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.promoId = params?.get('id') as string
      this.promoName = params?.get('categorieName') as string
      console.log(params.get('id'));
      console.log(params.get('categorieName'));

      this.store.promoNavData$.subscribe((data)=>{
     this.promos = data
     this.promos?.map((item)=>{
      item.name = item.category
     })
     console.log('promos', this.promos);
    })

      if(this.promoId){
        this.getPromoProduct(+this.promoId)
      }
    })
  }

  getPromoProduct(promoId:number){
    this.store.loader = true
    this.categorieService.searchPromoProduct({categoryId:promoId}).then(
      (res)=>{
        this.store.loader = false
        console.log('les produits de la promo', res)
        this.productData = res.GetProductsBySpecialCategory
      },(err)=>{
        this.store.loader = false
        console.log('erreur', err)
      }
    )

  }

  deslugify(slug: string): string {
  const text = slug
    .replace(/-/g, ' ')       // remplace les tirets par des espaces
    .replace(/\s+/g, ' ')     // nettoie les espaces multiples
    .trim()                   // supprime les espaces autour
    .toLowerCase();           // tout en minuscules

  return text.charAt(0).toUpperCase() + text.slice(1);
}



  getChipsClicked(chip:IGetPromoNav, index:number){
    console.log(chip);
    this.chipIndex = index
    this.router.navigate(['/home/categories/categorie-produit' , this.slugify(chip?.category) ,chip?.id])
    
  }


  slugify(text:any) {
  return text
    .toLowerCase()            // transforme en minuscules
    .trim()                   // supprime les espaces en début/fin
    .replace(/\s+/g, '-')     // remplace tous les espaces (même multiples) par des tirets
    .replace(/[^\w\-]+/g, '') // supprime les caractères spéciaux sauf les tirets
    .replace(/\-\-+/g, '-');  // remplace les doubles tirets par un seul
}







  getLastWord(url: string): string {
    const segments = url.split('/');
    return segments.filter(Boolean).pop() || '';
  }

  getLastWord2(url: string): string {
  const segments = url.split('/').filter(Boolean);
  return segments.length >= 2 ? segments[segments.length - 2] : '';
}

}
