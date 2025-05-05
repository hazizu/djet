import { Injectable } from '@angular/core';
import { GetUserGqlService, IGetUserInfoResponse } from './queries/get-user-gql.service';
import { jwtDecode } from 'jwt-decode';
import { StoreService } from 'src/app/core/services/store.service';
import { CategorieService } from '../../categorie/services/categorie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private getUserGqlService:GetUserGqlService,
    private store:StoreService,
    private categoriesService:CategorieService

  ) { }

  getUser(query:{} | undefined = undefined):Promise<IGetUserInfoResponse>{
    return new Promise((resolve, reject)=>{
      this.getUserGqlService.fetch(query,{fetchPolicy:'no-cache'}).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err.graphQLErrors)
          }
        }
      )
    })
  }

  getUserData(){
    const token:any = localStorage.getItem('token')
    console.log(token);
    if(token){
      const decodeToken:any = jwtDecode(token)
      console.log('decode token', decodeToken)
      this.store.loader = true
      this.getUser({id: decodeToken.user_id}).then(
        (res:IGetUserInfoResponse)=>{
          //this.store.loader = false
      
          console.log('use user', res);
          this.store.userData = res.GetUserByIdUsername
        },(err)=>{
          this.store.loader = false
          console.log('erreur user', err);
          
        }
      )
    }
  }

  getcategories(){
    this.categoriesService.getCategorie().then(
      (categorieData)=>{
        this.store.categorieData = categorieData.GetCategories
        this.store.loader = false
        console.log('les categiries', categorieData);
      },(err)=>{
        this.store.loader = false
        console.log('err categiries', err)
      }
    )

  }
}
