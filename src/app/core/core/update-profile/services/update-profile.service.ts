import { Injectable } from '@angular/core';
import { IUpdateProfileResponse, UpdateProfileGqlService } from '../queries/update-profile-gql.service';
import { IUpdatePassResponse, UpdatePassGqlService } from '../queries/update-pass-gql.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(
    private updateProfileGqlService:UpdateProfileGqlService,
    private updatePassGqlService:UpdatePassGqlService
  ) { }

  updateProfile(query:{} | undefined = undefined):Promise<IUpdateProfileResponse>{
    return new Promise((resolve, reject)=>{
      this.updateProfileGqlService.mutate(query).subscribe({
        next:(e)=>{
          if(e.data){
            resolve(e.data)
          }
        },error:(e)=>{
          reject(e.graphQLErrors)
        }
      })
    })
  }

  changePassword(query:{} | undefined = undefined):Promise<IUpdatePassResponse>{
    return new Promise((resolve, reject)=>{
      this.updatePassGqlService.mutate(query).subscribe({
        next:(e)=>{
          if(e.data){
            resolve(e.data)
          }
        },error:(e)=>{
          reject(e.graphQLErrors)
        }
      })
    })

 }
}
