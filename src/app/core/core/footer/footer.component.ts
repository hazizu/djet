import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { ICategorie } from 'src/app/mains/categorie/queries/get-categorie-gql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newLesterForm: FormGroup
  mainNews: ICategorie[] | null = []
  showButton: boolean = true
  invalidError: boolean = false
  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private router: Router
  ) {
    this.newLesterForm = this.fb.group({
      'email': ["", [Validators.required, Validators.email]]
    })

  }

  ngOnInit(): void {
    this.store.categiesData$.subscribe((data) => {
      console.log('les categories sont', data);
      this.mainNews = data
    })
  }

  goToCategorie(categorie: ICategorie) {
    this.router.navigate(['/home/categories/categorie-produit', categorie.id])
  }

  goToHome() {

    this.router.navigate(['/home'])
    setTimeout(() => {
      window.location.reload()
    }, 1000 / 3);

  }

  sendMail() {
    if (this.newLesterForm.valid) {
      this.showButton = false
      console.log('send mail');
      setTimeout(() => {
        this.showButton = true
        this.newLesterForm.reset()
        this.invalidError = false
      }, 2000);
    } else {
      this.invalidError = true
      console.log('invalid', this.newLesterForm);
      
    }

  }


  goToFacebook(){
    window.open('https://www.facebook.com/DjetTechnologie', '_blank');
  }
  goToInsta(){
    window.open('https://www.instagram.com/djet_technologie/', '_blank');
  }
  goToTiktok(){
    window.open('https://www.tiktok.com/@djet.technologie', '_blank');
  }
  goToWhatsapp(){
  const tel = "+2250758798524"
  //const site="https://djettechnologie.com/"
  const message = ` Bonjour, puis-je discuter avec vous ?`
  const url = `https://wa.me/${tel}?text=${message}`
  window.open(url, '_blank'); 

  }
}
