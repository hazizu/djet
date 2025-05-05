import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface ISubCategorie{
  id:string
  name:string
}

export interface ICategorie{
  image:string
  id:string
  name:string
  subcategories:ISubCategorie[]
}

export interface IGetCategorieResponse{
  GetCategories:ICategorie[]
}
@Injectable({
  providedIn: 'root'
})
export class GetCategorieGqlService extends Query<IGetCategorieResponse>{

  override document = gql`
  query{
  GetCategories{
    image
    id
    name
    subcategories{
      id
      name
    }
  }
}
  `;
}
