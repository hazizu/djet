import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface IUpdatePassResponse{
ChangePassword:{
  success:string
  message:string
   errors:string[]
}
}

@Injectable({
  providedIn: 'root'
})
export class UpdatePassGqlService extends Mutation<IUpdatePassResponse>{

  override document = gql`
  mutation ChangePassword($oldPassword: String!, $newPassword1: String!, $newPassword2: String!) {
  ChangePassword(oldPassword: $oldPassword, newPassword1: $newPassword1, newPassword2: $newPassword2) {
    success
    message
    errors
    
  }
} 
  `;
}
