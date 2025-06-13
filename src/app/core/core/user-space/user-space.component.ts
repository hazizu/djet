import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IGarantie } from 'src/app/shared/components/garantie-item/garantie-item.component';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss']
})
export class UserSpaceComponent {

  constructor(
    private router:Router
  ){

  }

    garantiesData:IGarantie[]=[
      {
        icon:"./../../../../assets/SVG/livraison-garantie-icon.svg",
        title:"Livraison dans les temps",
        description:"Commandez et recevez votre article dans les 24h avec des frais de livraisons défiants toute concurrence."
      },
      {
        icon:"./../../../../assets/SVG/garantie-icon.svg",
        title:"Articles garanties",
        description:"Nous avons une confiance absolue sur l’origine et la qualité de nos articles, Ils sont donc garantis 1 an."
      },
      {
        icon:"./../../../../assets/SVG/garantie-return-icon.svg",
        title:"Retour d'articles",
        description:"Après réception de vos articles, vous avez 10 jours pour faire un retour. Notre SAV est disponible pour vous."
  
      }
    ]

    logout(){
      localStorage.removeItem('token')
      this.router.navigate(['/'])
      setTimeout(() => {
        window.location.reload()
      }, 1000/5);
     
    }
}
