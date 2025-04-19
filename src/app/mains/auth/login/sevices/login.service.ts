import { Injectable } from '@angular/core';
import { ILoginResponse, LoginGqlService } from '../queries/login-gql.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginGqlService:LoginGqlService
  ) { }

  login(query:{} | undefined = undefined):Promise<ILoginResponse>{
    return new Promise((resolve, reject) => {
      this.loginGqlService.mutate(query).subscribe(
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
}
