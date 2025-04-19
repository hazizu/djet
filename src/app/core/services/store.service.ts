import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _userData : IUser | null = null
  private userDataSubject = new BehaviorSubject<IUser | null>(this._userData)

  constructor() { }

  get userData$():BehaviorSubject<IUser | null>{ 
    return this.userDataSubject
  }
  set userData(data:IUser){
    this._userData = data
    this.userDataSubject?.next(data)
  }
}
