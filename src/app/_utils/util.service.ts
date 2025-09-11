import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  latitude?: number;
  longitude?: number;

  constructor() { }

    getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log('Lat:', this.latitude, 'Long:', this.longitude);
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
        }
      );
    } else {
      console.log('La géolocalisation n’est pas supportée par ce navigateur.');
    }
  }

    async route(){
     const point = [-3.9532814411243673, 5.399201812263594]

     const startAdress = [this.latitude, this.longitude]
  
      if(this.longitude && this.latitude){
      let route = `https://www.google.com/maps?f=d&saddr=${startAdress[0]},${startAdress[1]}&daddr=${point[1]},
     ${point[0]}`
     let link = `https://www.google.com/maps/place/${startAdress[0]},${
      startAdress[1]}`
 
     window.open(route)

      }else{
        this.getLocation()
      }
 
  }
}
