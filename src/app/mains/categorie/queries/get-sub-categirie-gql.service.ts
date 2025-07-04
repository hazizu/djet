import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface ISubcategorie{
  id:string,
   name:string
}

export interface IGetSubcategorieResponse{
  GetCategory:{
    id:string,
    name:string,
    subcategories:ISubcategorie[]
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class GetSubCategirieGqlService extends Query<IGetSubcategorieResponse>{

  override document = gql`
  query($id:Int){
  GetCategory(id:$id){
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
