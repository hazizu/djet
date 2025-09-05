import { AfterViewInit, Component,  ComponentFactory,  ComponentFactoryResolver,  inject,  ViewContainerRef } from '@angular/core';


import * as L from 'leaflet';
import { LocalisationPopupInfosComponent } from '../localisation-popup-infos/localisation-popup-infos.component';

@Component({
  selector: 'app-localisation-map',
  templateUrl: './localisation-map.component.html',
  styleUrls: ['./localisation-map.component.scss']
})
export class LocalisationMapComponent implements AfterViewInit{
private map:any;
  private viewContainerRef = inject(ViewContainerRef);

constructor(


){

}

private initMap(): void {
    this.map = L.map('map', {
      center: [5.399201812263594, -3.9532814411243673],
      zoom: 17
    });

  const DefaultIcon = L.icon({
  iconUrl: "./../../../../assets/png/broche-de-localisation.png",
    iconSize: [50, 55], // Size of the icon [width, height]
    iconAnchor: [20, 45], // Point of the icon which will correspond to marker's location
    popupAnchor: [10, -50]
});




     const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '<a>Djet Technologie</a>'
    });
    
    const popupContent = '<div id="popup-container"></div>';
   
    L.marker([5.399201812263594, -3.9532814411243673], {icon: DefaultIcon}).addTo(this.map)
    .bindPopup(popupContent)
    .openPopup();
    tiles.addTo(this.map);

    this.map.on('popupopen', () => {
      console.log('popupopen');
      const container = document.getElementById('popup-container');
      if(container){
        const componentRef = this.viewContainerRef.createComponent(LocalisationPopupInfosComponent);
        container.appendChild(componentRef.location.nativeElement);
      }
    })

        const container = document.getElementById('popup-container');
      if(container){
        const componentRef = this.viewContainerRef.createComponent(LocalisationPopupInfosComponent);
        container.appendChild(componentRef.location.nativeElement);
      }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
