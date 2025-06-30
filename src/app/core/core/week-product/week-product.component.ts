import { Component, OnInit } from '@angular/core';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';
import { CategorieService } from 'src/app/mains/categorie/services/categorie.service';
import { Article } from 'src/app/mains/gestion-produit/searched-articles/searched-articles.component';

export interface IProductData {
  image: string,
  name: string,
  price: number,
}

@Component({
  selector: 'app-week-product',
  templateUrl: './week-product.component.html',
  styleUrls: ['./week-product.component.scss']
})
export class WeekProductComponent implements OnInit{
  productData:ICategorieProduct[] = []

  constructor(private categorieSevice:CategorieService) {

  }


  ngOnInit(): void {
    this.getWeekProducts()
    
  }


  getWeekProducts(){
    this.categorieSevice.searchWeekProduct().then((res)=>{
      console.log('week product', res);
      this.productData = res.GetWeeklyTechOffersBySubCategory
    })

  }
}
