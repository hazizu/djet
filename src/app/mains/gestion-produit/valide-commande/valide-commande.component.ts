import { Component, OnInit } from '@angular/core';
import { CategorieProduitNavItem } from 'src/app/shared/components/categorie-produit-nav-item/categorie-produit-nav-item.component';
import { IGarantie } from 'src/app/shared/components/garantie-item/garantie-item.component';
import { ICategorieProduct } from '../../categorie/queries/get-categorie-products.service';
import { PanierService } from '../panier/panier.service';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { IUser } from '../../auth/login/queries/login-gql.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionOrderService } from '../detail-article/services/gestion-order.service';
import { ILinkArticleToOrderResponse } from '../detail-article/queries/link-article-to-order-gql.service';

@Component({
  selector: 'app-valide-commande',
  templateUrl: './valide-commande.component.html',
  styleUrls: ['./valide-commande.component.scss']
})
export class ValideCommandeComponent implements OnInit {

  paniers: ICategorieProduct[] = [];
  totalPrices: number = 0;
  userData: IUser | null;
  isValideCommande: boolean = false
  addressLivraisonForm: FormGroup
  invalidError: boolean = false
  showForm: boolean = true
  orderNumber:string = '' 

  garantiesData: IGarantie[] = [
    {
      icon: "./../../../../assets/SVG/livraison-garantie-icon.svg",
      title: "Livraison dans les temps",
      description: "Commandez et recevez votre article dans les 24h avec des frais de livraisons défiants toute concurrence."
    },
    {
      icon: "./../../../../assets/SVG/garantie-icon.svg",
      title: "Articles garanties",
      description: "Nous avons une confiance absolue sur l’origine et la qualité de nos articles, Ils sont donc garantis 1 an."
    },
    {
      icon: "./../../../../assets/SVG/garantie-return-icon.svg",
      title: "Retour d'articles",
      description: "Après réception de vos articles, vous avez 10 jours pour faire un retour. Notre SAV est disponible pour vous."

    }
  ]

  produitNavs: CategorieProduitNavItem[] = [
    {
      navName: 'Smartphones & tablettes',
      pathName: 'smartphones',
      image: './../../../../assets/SVG/categorie-produit-smartphone.svg',
    },
    {
      navName: 'PC & MAC',
      pathName: 'pc-mac',
      image: './../../../../assets/SVG/categorie-produit-tablette.svg',
    },
    {
      navName: 'Gaming',
      pathName: 'gaming',
      image: './../../../../assets/SVG/categorie-produit-telephone-portable.svg',
    },
    {
      navName: 'Stockage',
      pathName: 'stockage',
      image: './../../../../assets/SVG/categorie-produit-telephone-fixed.svg',
    },
    {
      navName: 'Audio & vidéo',
      pathName: 'audio-video',
      image: './../../../../assets/SVG/categorie-produit-accessoires.svg',
    }
  ]

  productData: ICategorieProduct[] = [
    {
      images: [{ image: './../../../../assets/SVG/product1.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product2.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product3.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product1.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product2.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product3.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
    {
      images: [{ image: './../../../../assets/SVG/product1.svg' }],
      updatePrice: 120000,
      oldPrice: 120000,
      name: 'Iphone 14 Pro, 128 Go, ecran led, 6,1 pouces, gris',
      price: 120000,
      description: "",
      id: "1",
      note: 1,
      quantity: 1
    },
  ]

  constructor(
    private panierService: PanierService,
    public router: Router,
    private store: StoreService,
    private fb: FormBuilder,
    private gestionOrderService: GestionOrderService
  ) {
    this.userData = null
    this.addressLivraisonForm = this.fb.group({
      "commune": ['', Validators.required],
      "quartier": ['', Validators.required],
      "addressDetail": [''],
    })

  }


  ngOnInit(): void {
    this.panierService.paniers$.subscribe(res => {
      this.paniers = res;
      this.totalPrices = Number(res.reduce((sum, item) => {
        return sum + item.updatePrice;
      }, 0))
      console.log('le panier', res);
      console.log('total', this.totalPrices, typeof (this.totalPrices))

    })

    //user data
    this.store.userData$.subscribe((userdata) => {
      this.userData = userdata;
      console.log('userdata', userdata);
    })

  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  valideCommande() {
    if (this.addressLivraisonForm.valid) {
     this.postOrder()
    } else {
      this.invalidError = true
    }
    //this.isValideCommande = true
  }

  valideAdress() {
    if (this.addressLivraisonForm.valid) {
      console.log('valide adresse', this.addressLivraisonForm.value);
      this.showForm = false
    } else {
      this.invalidError = true;
    }
  }

  updateAdressForm() {
    this.showForm = true
  }

  postOrder() {
    this.store.loader = true
    let adresseValue = this.addressLivraisonForm.value
    const query = {
      userId: this.userData?.id ? +this.userData.id : null,
      deliveryAddress: adresseValue.commune + ', ' + adresseValue.quartier + ', ' + adresseValue.addressDetail
    }
    console.log('order query', query);
    this.gestionOrderService.createOrder(query).then(
      (res) => {
        if(res.CreateOrder.success){
        console.log('post order ok', res);
        console.log('order number',res.CreateOrder.order.orderNumber)
        
        // if(res.CreateOrder.order.orderNumber){
           this.linkArticleToOrder(res.CreateOrder.order.id, res.CreateOrder.order.orderNumber)
        // }
        }else{
          this.store.loader = false
          console.log('post order error', res);
        }
        
      },(error)=>{
        this.store.loader = false
        console.log('erreur post order',error)
      }
    )
  }

  async linkArticle(query:{}):Promise<ILinkArticleToOrderResponse>{
    try{
      let linkRes =  await this.gestionOrderService.linkArticleToOrder(query)
      console.log('linkArticleToOrder',linkRes)
      return linkRes
    }catch(err){
      this.store.loader = false
      console.log('erreur linkArticleToOrder',err)
      throw err
    }
   
  }

  async linkArticleToOrder(orderId: string, orderNumber:string) {
  const promises: Promise<any>[] = [];

    for(let panier of this.paniers){
    const query = {
      orderId: orderId,
      name: panier.name,
      price: panier.price,
      productId: +panier.id,
      quantity: panier.quantity,
      updatePrice: panier.updatePrice
    }
   promises.push(this.linkArticle(query))
  }

  try{
    await Promise.all(promises)
    this.store.loader = false
    console.log("toute les articles sont liés à la commande " + orderId)
    this.isValideCommande = true
    this.panierService.clearPanier()
    this.orderNumber = orderNumber
  }catch(err){
    this.store.loader = false
    console.log('erreur linkArticleToOrder',err)
    throw err
  }
  }
}
