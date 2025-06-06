import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-commande',
  templateUrl: './filter-commande.component.html',
  styleUrls: ['./filter-commande.component.scss']
})
export class FilterCommandeComponent {

  @Output() filterCodeChange : EventEmitter<string> = new EventEmitter<string>();
  isCheckedIndex:number= 0

  filters = [
    {
      title: 'Toutes les commandes',
      filterCode:'allOrders'
    },
    {
      title:'Commandes en cours',
      filterCode:'inProgressOrders'
    },
    {
      title:'Articles livrés',
      filterCode:'deliveredOrders'
    },
    {
      title:'Articles retournés',
      filterCode:'returnedOrders'
    }

    
  ]
  changeFilter(filterCode:string, index:number){
  this.isCheckedIndex = index
    this.filterCodeChange.emit(filterCode)
  }

}
