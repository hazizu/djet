import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  constructor(private router:Router) { }
goToHome(){
  this.router.navigate(['/home'])
}

openwhatsapp(){
  const tel = "+2250701509331"
  //const site="https://djettechnologie.com/"
  const message = ` Bonjour, puis-je discuter avec vous ?`
  const url = `https://wa.me/${tel}?text=${message}`
  window.open(url, '_blank'); 

}
}
