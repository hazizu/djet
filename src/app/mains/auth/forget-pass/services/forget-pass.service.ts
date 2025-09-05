import { Injectable } from '@angular/core';
import { ForgetGqlService, ForgetUserPassResponse } from '../queries/forget-gql.service';

@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {

  constructor(private forgetGqlService:ForgetGqlService) { }

  sendUserEmail(query:{} | undefined = undefined):Promise<ForgetUserPassResponse>{
    return new Promise((resolve, reject)=>{
      this.forgetGqlService.mutate(query).subscribe(
        {
          next:(e)=>{
            if(e.data){
              resolve(e.data)
            }
          },error:(err)=>{
            reject(err)
          }
        }
      )
      
    })

  }
}
