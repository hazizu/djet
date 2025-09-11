import { Component } from '@angular/core';
import { UtilService } from 'src/app/_utils/util.service';

@Component({
  selector: 'app-localisation-popup-infos',
  templateUrl: './localisation-popup-infos.component.html',
  styleUrls: ['./localisation-popup-infos.component.scss']
})
export class LocalisationPopupInfosComponent {

  constructor(private utils:UtilService) { }

  listImages:string[] = [
    "./../../../../assets/png/local-image2.jpg",
    "./../../../../assets/png/local-image3.jpg",
    "./../../../../assets/png/local-image4.jpg",
    "./../../../../assets/png/local-image5.jpg",
    "./../../../../assets/png/local-image6.jpg",
  ]
  itinary(){
    this.utils.route()

  }

}
