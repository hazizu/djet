import { Component, Input } from '@angular/core';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';
import { PanierService } from '../panier/panier.service';

@Component({
  selector: 'app-panier-resume-item',
  templateUrl: './panier-resume-item.component.html',
  styleUrls: ['./panier-resume-item.component.scss']
})
export class PanierResumeItemComponent {
@Input() productData! : ICategorieProduct;

constructor(
  private panierService:PanierService
){

}

onChangeValue(changeValue:number){
  console.log('onChangeValue', changeValue);
if(this.productData){
  let panier = this.panierService.getPanier();
 const copiePanier = [...panier];
 copiePanier.forEach((item, index)=>{
  if(item.id == this.productData.id){
    copiePanier[index].quantity = changeValue;
    copiePanier[index].updatePrice = copiePanier[index].price * copiePanier[index].quantity;
    copiePanier[index] = {...item, ...copiePanier[index]};
  }
  panier = copiePanier
  localStorage.setItem('panier', JSON.stringify(panier));
  this.panierService.paniersSubject.next(panier);
  
  //console.log('update panier', this.panierService.getPanier());
  
 })

 
}
}

removeArticle(){
  if(this.productData){
  this.panierService.removeFromPanier(+this.productData?.id);
}
}
}
