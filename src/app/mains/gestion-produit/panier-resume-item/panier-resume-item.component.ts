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
  
if(this.productData){
  let panier = this.panierService.getPanier();
 const copiePanier = [...panier];
 copiePanier.forEach((item, index)=>{
  if(item.id == this.productData.id){
    if(  changeValue <= copiePanier[index].quantity){
    copiePanier[index].cmdQuantity = changeValue;
    copiePanier[index].updatePrice = copiePanier[index].price * copiePanier[index].cmdQuantity;
    copiePanier[index] = {...item, ...copiePanier[index]};
    }else{
      console.log('onChangeValue', changeValue);
      alert('Vous ne pouvez pas ajouter plus de produits, rupture de stock')
    }
   
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
