import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface IUser{
  id:string
  username:string
  email:string
  firstName:string
  lastName:string
  phone:string
  address:string
}

export interface ILoginResponse{
  UserLogin:{
    accessToken:string
    user:IUser
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginGqlService extends Mutation<ILoginResponse>  {

  override document = gql`
 mutation ($email: String!, $password: String!) {
  UserLogin(email: $email, password: $password) {
    accessToken
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
  `;

}
