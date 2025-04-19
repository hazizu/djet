import { Injectable } from '@angular/core';
import { IUserRegisterResponse, PostUserGqlService } from '../queries/post-user-gql.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private postUserGqlService:PostUserGqlService) { }

  postUser(query:{} | undefined = undefined):Promise<IUserRegisterResponse>{
    return new Promise((resolve, reject) => {
      this.postUserGqlService.mutate(query).subscribe(
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
