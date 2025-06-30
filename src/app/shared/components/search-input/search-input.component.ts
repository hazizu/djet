import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { SearchProductService } from 'src/app/mains/gestion-produit/searched-articles/service/search-product.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  seachValue:string=""
  closeSearchedList:boolean=true
  @Output() onChangeValue:EventEmitter<string> = new EventEmitter<string>
  @Output() onSearchedValue:EventEmitter<string> = new EventEmitter<string>
  @Input() preSearchList:string[]=[
    "Apple iPhone 14 Pro Max 256 GB", 
    "Apple iPhone 13 Pro",
    "Apple iPhone 13 mini ",
    "Apple iPhone 12",
    "Apple iPhone 11 Pro Max",
  ]

  constructor(
    private serchProductservice:SearchProductService, 
    private store:StoreService,
    private router:Router
  ){

  }

  getValue(){
    this.onChangeValue.emit(this.seachValue)
    console.log(this.seachValue);
    this.seachValue ? this.closeSearchedList = true : this.closeSearchedList = false
  }
  getValueWithButton(){
    this.onChangeValue.emit(this.seachValue)
    console.log(this.seachValue);
    this.searchProduct(this.seachValue)
  }

  getSearchedValue(searchedValue:string){
    this.onSearchedValue.emit(searchedValue)
    console.log(searchedValue);
    this.closeSearchedList = false
  }

  searchProduct(searchedValue:string){
    if(searchedValue){
    this.store.loader = true
    this.serchProductservice.searchProductBywords({searchTerm:searchedValue}).then(
      (res)=>{
        this.store.loader = false 
        console.log('les produits recherchés', res)
        this.store.searchData = res.SearchProducts
        this.store.searchedWords = searchedValue
        this.router.navigate(['/home/articles']);
      },(err)=>{this.store.loader = false}
    )  
  }
  }
}
