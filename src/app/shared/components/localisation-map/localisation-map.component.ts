import { AfterViewInit, Component } from '@angular/core';


import * as L from 'leaflet';

@Component({
  selector: 'app-localisation-map',
  templateUrl: './localisation-map.component.html',
  styleUrls: ['./localisation-map.component.scss']
})
export class LocalisationMapComponent implements AfterViewInit{
private map:any;


private initMap(): void {
    this.map = L.map('map', {
      center: [ 5.399587, -3.953656],
      zoom: 16
    });

  const DefaultIcon = L.icon({
  iconUrl: "./../../../../assets/png/localisation.png",
    iconSize: [50, 55], // Size of the icon [width, height]
    iconAnchor: [20, 45], // Point of the icon which will correspond to marker's location
    popupAnchor: [10, -50]
});




     const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '<a>Djet Technologie</a>'
    });

   
    L.marker([5.399587, -3.953656], {icon: DefaultIcon}).addTo(this.map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();

     tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
