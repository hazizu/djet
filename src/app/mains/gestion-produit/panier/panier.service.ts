import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';

export interface IPanierArticle {
  id: number;
  name: string;
  price: number;
  quantity: number;
  // tu peux ajouter image, etc.
}

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private paniers: ICategorieProduct[]  = [];
  public paniersSubject = new BehaviorSubject<ICategorieProduct[]>([]);
  paniers$ = this.paniersSubject.asObservable();

  constructor() {
    const storePanier = localStorage.getItem('panier');
    this.paniers = storePanier ? JSON.parse(storePanier) : [];
    this.paniersSubject.next(this.paniers);
  }

  addToPanier(article: ICategorieProduct) {
    const existingArticle = this.paniers.find(a => +a.id ==+article.id);
    if(existingArticle){
      existingArticle.quantity += article.quantity;
    }else{
      this.paniers.push({...article});
    }
    this.saveAndEmit();

  }

  removeFromPanier(id:number) {
    this.paniers = this.paniers.filter(a => +a.id !== id);
    this.saveAndEmit()
  }

  clearPanier(){
    this.paniers = [];
    this.saveAndEmit();
  }

  getPanier(){
    return this.paniers;
  }

  saveAndEmit(){
    localStorage.setItem('panier', JSON.stringify(this.paniers));
    this.paniersSubject.next(this.paniers);
  }
   
}
