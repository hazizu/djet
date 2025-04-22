import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { IUser } from '../../login/queries/login-gql.service';

export interface IGetUserInfoResponse {
  GetUserByIdUsername:IUser

  }



@Injectable({
  providedIn: 'root'
})
export class GetUserGqlService extends Query<IGetUserInfoResponse>{

  override document = gql`
query($username:String, $id:Int){
  GetUserByIdUsername(username:$username, id:$id){
    id
    username
    email
    firstName
    lastName
    phone
    address
  }
}
  `;
}
