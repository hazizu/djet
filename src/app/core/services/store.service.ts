import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { IGetPromoNav } from '../core/main-news/queries/get-promo-categorie-gql.service';
import { ICategorieProduct } from 'src/app/mains/categorie/queries/get-categorie-products.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _userData : IUser | null = null
  private userDataSubject = new BehaviorSubject<IUser | null>(this._userData)

  private _categorieData:ICategorie[] | null = []  
  private categorieDataSubject = new BehaviorSubject<ICategorie[] | null>(this._categorieData)

  private _promoNavData:IGetPromoNav[] | null = []  
  private promoNavDataSubject = new BehaviorSubject<IGetPromoNav[] | null>(this._promoNavData)

  private _searchData:ICategorieProduct[] | null = []
  private searchDataSubject = new BehaviorSubject<ICategorieProduct[] | null>(this._searchData)
  
 

  _loader: boolean = false
  private loaderSubject = new BehaviorSubject<boolean>(this._loader)

  _searchedWords:string = ''
  private searchedWordsSubject = new BehaviorSubject<string>(this._searchedWords)

  _isLogout: boolean = false
  private isLogoutSubject = new BehaviorSubject<boolean>(this._isLogout)

  _showAddedAlert:boolean = false
  private showAddedAlertSubject = new BehaviorSubject<boolean>(this._showAddedAlert)

  constructor() { }

  get userData$():BehaviorSubject<IUser | null>{ 
    return this.userDataSubject
  }
  get searchedWords$():BehaviorSubject<string>{
    return this.searchedWordsSubject
  }
  get loader$(): BehaviorSubject<boolean>{
    return this.loaderSubject
  }

  get isLogout$(): BehaviorSubject<boolean>{
    return this.isLogoutSubject
  }
  get showAddedAlert$(): BehaviorSubject<boolean>{
    return this.showAddedAlertSubject
  }

  get categiesData$():BehaviorSubject<ICategorie[] | null>{
    return this.categorieDataSubject
  }

  get promoNavData$():BehaviorSubject<IGetPromoNav[] | null>{
    return this.promoNavDataSubject
  }

  get searchData$():BehaviorSubject<ICategorieProduct[] | null>{
    return this.searchDataSubject
  }
  
  set loader(value: boolean){
    this._loader = value
    this.loaderSubject.next(value)
    console.log('loader update', value)
  }
  set searchedWords(value: string){
    this._searchedWords = value
    this.searchedWordsSubject.next(value)
  }

  set isLogout(value: boolean){
    this._isLogout = value
    this.isLogoutSubject.next(value)
  }
  set showAddedAlert(value: boolean){
    this._showAddedAlert = value
    this.showAddedAlertSubject.next(value)
  }
  set userData(data:IUser){
    this._userData = data
    this.userDataSubject?.next(data)
  }

  set categorieData(data:ICategorie[]){
    this._categorieData = data
    this.categorieDataSubject?.next(data)
  }

  set promoNavData(data:IGetPromoNav[]){
    this._promoNavData = data
    this.promoNavDataSubject?.next(data)
  }

  set searchData(data:ICategorieProduct[]){
    this._searchData = data
    this.searchDataSubject?.next(data)
  }
}
