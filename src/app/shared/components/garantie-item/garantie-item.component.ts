import { Component, Input } from '@angular/core';

export interface IGarantie {
  title: string,
  icon: string,
  description: string,
  
}

@Component({
  selector: 'app-garantie-item',
  templateUrl: './garantie-item.component.html',
  styleUrls: ['./garantie-item.component.scss']
})
export class GarantieItemComponent {
  @Input() garantie?:IGarantie

}
