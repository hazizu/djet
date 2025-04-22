import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _userData : IUser | null = null
  private userDataSubject = new BehaviorSubject<IUser | null>(this._userData)

  _loader: boolean = false
  private loaderSubject = new BehaviorSubject<boolean>(this._loader)

  constructor() { }

  get userData$():BehaviorSubject<IUser | null>{ 
    return this.userDataSubject
  }
  get loader$(): BehaviorSubject<boolean>{
    return this.loaderSubject
  }
  
  set loader(value: boolean){
    this._loader = value
    this.loaderSubject.next(value)
    console.log('loader update', value)
  }
  set userData(data:IUser){
    this._userData = data
    this.userDataSubject?.next(data)
  }
}
