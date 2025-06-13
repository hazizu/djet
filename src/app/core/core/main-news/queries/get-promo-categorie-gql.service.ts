import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface IGetPromoNav{
  id:string
  image:string
  category:string
  name:string
}

export interface IGetPromoNavResponse{
  GetSpecialCategories:IGetPromoNav[]
}

@Injectable({
  providedIn: 'root'
})
export class GetPromoCategorieGqlService extends Query<IGetPromoNavResponse>{

  override document  = gql`
  query{
  GetSpecialCategories{
  id
  image
  category
  }
}
  `;
}
