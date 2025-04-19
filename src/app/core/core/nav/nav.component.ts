import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() isNavOpen:EventEmitter<boolean> = new EventEmitter<boolean>();

  navData = [
    {
      libelle:'Boutiques officielles',
      navList:["IPhone 16 Pro max","IPhone 15 Pro max","IPhone 14 Pro max"],
      icon:"./../../../../assets/SVG/boutique-icon.svg"
    },
    {
      libelle:'Smartphones et tablettes',
      navList:["IPad Mini 2015","IPad 12","IPad 11 200 GB","IPad 11 256 GB"],
      icon:"./../../../../assets/SVG/smartphone.svg"
    },
    {
      libelle:'PC & MAC',
      navList:["MacBook Pro M1 2022","MacBook Air 2020 1T","MacBook Air 2020 256 GB","MacBook Pro 2021 1T","MacBook Pro 2021 256 GB","MacBook Pro 2021 512 GB","MacBook Pro 2021 1T","MacBook Pro 2021 256 GB","MacBook Pro 2021 512 GB"],
      icon:"./../../../../assets/SVG/computer.svg"
    },
    {
      libelle:'Audio & vidéo',
      navList:["Camon 1005 A","Sony XDR 1007 VE","Sony XDR 2000 VE Ultra"],
      icon:"./../../../../assets/SVG/audio-icon.svg"
    },
    {
      libelle:'Univers Gaming',
      navList:[" PLaystation 5","Console sans fil","PSP Ultra", "Xbox Series X","Xbox Series S","Xbox Series X","Xbox Series S"],
      icon:"./../../../../assets/SVG/game-icon.svg"  
    },
    {
      libelle:'Stockage',
      navList:["Carte memoires 2G","Carte memoires 32G","Carte memoires 32G", "Clé USB 2T","Clé USB 32G","Clé USB 64G","Clé USB 128G","Clé USB 256G","Clé USB 512G","Clé USB 1T"],
      icon:"./../../../../assets/SVG/carte memoitre.svg"  
    },
    {
      libelle:'Accessoires techs',
      navList:[" Ecouteurs sans fil","Airpod 2","Coque en Cuire", "Anti-choc"],
      icon:"./../../../../assets/SVG/accessoires.svg"
    }
  ]

  closeNave(){
    this.isNavOpen.emit(true);
    
  }

}
