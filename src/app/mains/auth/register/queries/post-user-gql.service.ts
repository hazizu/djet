import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

export interface IUserRegisterResponse {
  UserRegister:{
    errors:string,
    message:string,
    success:boolean
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class PostUserGqlService extends Mutation<IUserRegisterResponse>{

  override document = gql`
  mutation($phone:String!, $username:String!, $firstName:String, $lastName:String, $email:String!, $address:String, $password1:String!, $password2:String!){
  UserRegister(input:{
    phone:$phone,
    username:$username,
    firstName:$firstName,
    lastName:$lastName,
    email:$email,
    address:$address,
    password1:$password1,
    password2:$password2
  }){
    errors
    message
    success
  }
}
  `;
}
