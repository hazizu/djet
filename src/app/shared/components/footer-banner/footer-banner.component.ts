import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-banner',
  templateUrl: './footer-banner.component.html',
  styleUrls: ['./footer-banner.component.scss']
})
export class FooterBannerComponent {
  constructor(private router:Router) {

  }

  goToHome(){
this.router.navigate(['/home'])
       setTimeout(() => {
     window.location.reload()
    }, 1000/3);
  }

}
