import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _userData : IUser | null = null
  private userDataSubject = new BehaviorSubject<IUser | null>(this._userData)

  private _categorieData:ICategorie[] | null = []  
  private categorieDataSubject = new BehaviorSubject<ICategorie[] | null>(this._categorieData)
  
 

  _loader: boolean = false
  private loaderSubject = new BehaviorSubject<boolean>(this._loader)

  _showAddedAlert:boolean = false
  private showAddedAlertSubject = new BehaviorSubject<boolean>(this._showAddedAlert)

  constructor() { }

  get userData$():BehaviorSubject<IUser | null>{ 
    return this.userDataSubject
  }
  get loader$(): BehaviorSubject<boolean>{
    return this.loaderSubject
  }
  get showAddedAlert$(): BehaviorSubject<boolean>{
    return this.showAddedAlertSubject
  }

  get categiesData$():BehaviorSubject<ICategorie[] | null>{
    return this.categorieDataSubject
  }
  
  set loader(value: boolean){
    this._loader = value
    this.loaderSubject.next(value)
    console.log('loader update', value)
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
}
