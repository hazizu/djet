import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { IUser } from 'src/app/mains/auth/login/queries/login-gql.service';

export interface IUpdateProfileResponse{
  UpdateUserInfo:{
      success:string
    message:string
     errors:string[]
    user:IUser
  }
}

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileGqlService extends Mutation<IUpdateProfileResponse>{

  override document = gql`
  mutation UpdateUserInfo(
  $firstName: String, 
  $lastName: String, 
  $phone: String, 
  $email: String, 
  $address: String
) {
  UpdateUserInfo(
    firstName: $firstName, 
    lastName: $lastName, 
    phone: $phone, 
    email: $email, 
    address: $address
  ) {
    success
    message
     errors
    user {
      id
      username
      email
      firstName
      lastName
      phone
      address
    }
   
  }
}
  `
}
