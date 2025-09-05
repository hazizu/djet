import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface ForgetUserPass{
   success:boolean
    message:string
    errors:string[]
}

export interface ForgetUserPassResponse{
  ForgotPassword:ForgetUserPass
}

@Injectable({
  providedIn: 'root'
})
export class ForgetGqlService extends Mutation<ForgetUserPassResponse>{

  override document = gql`
  mutation($email:String!){
  ForgotPassword(email:$email) {
    success
    message
    errors
  }
}
`;
}
