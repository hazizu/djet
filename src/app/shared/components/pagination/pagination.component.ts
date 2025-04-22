import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1
  @Input() totalCount: number = 0
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>
  @Output() changeCurrentPage: EventEmitter<number> = new EventEmitter<number>
  pageSize: number = 0
  
  pages: number[] = []

  constructor() {
    this.pageSize = 50
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Vérifier que totalCount et pageSize sont bien définis
    if (this.totalCount > 0 && this.pageSize > 0) {
      const totalPages = Math.ceil(this.totalCount / this.pageSize); // Calcul du nombre de pages
      this.pages = Array(totalPages).fill(0).map((x, i) => i + 1);
    } else {
      this.pages = []; //  les données ne sont pas définies
    }
  
  }

  updatePage(page: number){
    if(page){
      this.changePage.emit(page * this.pageSize - this.pageSize)
      this.currentPage = page
      console.log(this.currentPage);
      this.changeCurrentPage.emit(this.currentPage)
      
    }
  }

  updateToNext(){
    this.changePage.emit(((this.currentPage+1) * this.pageSize) - this.pageSize)
    this.currentPage = this.currentPage + 1
    this.changeCurrentPage.emit(this.currentPage)
  }
  
  updateToPrev(){
    this.changePage.emit(((this.currentPage-1) * this.pageSize) - this.pageSize)
    this.currentPage = this.currentPage - 1
    this.changeCurrentPage.emit(this.currentPage)
  }


}
