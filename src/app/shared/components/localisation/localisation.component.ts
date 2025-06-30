import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent {
  constructor(private router:Router){}
goToHome(){
  this.router.navigate(['/home'])
  console.log(this.router.url);
  
}
}
