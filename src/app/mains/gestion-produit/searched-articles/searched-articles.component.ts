import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from '../../auth/login/queries/login-gql.service';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../categorie/services/categorie.service';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';

export interface Article {
  id:string,
  price:number,
  oldPrice?:number
  name:string,
  image:string,
  description:string,
  note?:number
}

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html',
  styleUrls: ['./searched-articles.component.scss']
})
export class SearchedArticlesComponent implements OnInit{
user:IUser | null = null;
totalCount:number = 500;
categorieId?:string | null
  articles:ICategorieProduct[] = []
  categorieName:string = ""
    // {
    //   image: './../../../../assets/SVG/product1.svg',
    //   name: 'Iphone 14 Pro, 256 GB, blanc, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"1"
    // },
    // {
    //   image: './../../../../assets/SVG/product2.svg',
    //   name: 'Iphone 14 Pro',
    //   price: 120000,  
    //   description:"",
    //   id:"2"
    // },
    // {
    //   image: './../../../../assets/SVG/product3.svg',
    //   name: 'Iphone 14 Pro, 2T, blanc, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"3"
    // },
    // {
    //   image: './../../../../assets/SVG/product4.svg',
    //   name: 'Iphone 14 Pro',
    //   price: 120000,
    //   description:"",
    //   id:"4"
    // },
    // {
    //   image: './../../../../assets/SVG/product1.svg',
    //   name: 'Iphone 14 Pro, 256 GB, noir, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"5"
    // },
    // {
    //   image: './../../../../assets/SVG/product2.svg',
    //   name: 'Iphone 14 Pro',
    //   price: 120000,  
    //   description:"",
    //   id:"6 "
    // },
    // {
    //   image: './../../../../assets/SVG/product3.svg',
    //   name: 'Iphone 14 Pro, 2T, noir, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"7"
    // },
    // {
    //   image: './../../../../assets/SVG/product4.svg',
    //   name: 'Iphone 14 Pro',
    //   price: 120000,
    //   description:"",
    //   id:"8"
    // },
    // {
    //   image: './../../../../assets/SVG/product2.svg',
    //   name: 'Iphone 14 Pro',
    //   price: 120000,  
    //   description:"",
    //   id:"2"
    // },
    // {
    //   image: './../../../../assets/SVG/product3.svg',
    //   name: 'Iphone 14 Pro, 2T, noir, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"3"
    // },
    // {
    //   image: './../../../../assets/SVG/product1.svg',
    //   name: 'Iphone 14 Pro, 256 GB, noir, écran 6,1 pouces',
    //   price: 120000,
    //   description:"",
    //   id:"5"
    // },
    // {
    //   image: './../../../../assets/SVG/product2.svg',
    //   name: 'Iphone 14 Pro, 1T gold, ercan Led',
    //   price: 120000,  
    //   description:"",
    //   id:"6 "
    // },
  
  
  constructor(
    private route:ActivatedRoute,
    private categorieService:CategorieService,
    private store:StoreService
    
  ){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this.categorieId = params?.get('id') as string
      this.getProducts(+this.categorieId)
    })
  }

  getSearchValue(value:string){
    console.log(value);
  }
  onChangePage(offset:number){
    console.log(offset);
  }

  getProducts(cat_id:number | null){
    this.store.loader = true
    this.categorieService.getCategorieProducts({id:cat_id}).then(
      (res)=>{
        this.store.loader = false
        console.log('les produits recherchés', res)
        this.articles = res.GetSubCategory.products
        this.categorieName = res.GetSubCategory.name
        
      },(err)=>{
        this.store.loader = false
        console.log('erreur', err)
      }
    )

}
}
