import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ExtensibleButtonComponent } from './components/extensible-button/extensible-button.component';
import { SlideComponent } from './components/slide/slide.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsButtonItemComponent } from './components/news-button-item/news-button-item.component';
import { SmallNewsButtonItemComponent } from './components/small-news-button-item/small-news-button-item.component';
import { ProductCardItemComponent } from './components/product-card-item/product-card-item.component';
import { AddPlusBtnComponent } from './components/add-plus-btn/add-plus-btn.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

import { ChipBtnComponent } from './components/chip-btn/chip-btn.component';
import { DjetBannerComponent } from './components/djet-banner/djet-banner.component';
import { SimpleArticleCardItemComponent } from './components/simple-article-card-item/simple-article-card-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CategorieProduitNavItemComponent } from './components/categorie-produit-nav-item/categorie-produit-nav-item.component';
import { GarantieItemComponent } from './components/garantie-item/garantie-item.component';
import { ImagesVisualisationComponent } from './components/images-visualisation/images-visualisation.component';
import { InfoDetailArticleComponent } from './components/info-detail-article/info-detail-article.component';
import { KeyValueItemComponent } from './components/key-value-item/key-value-item.component';
import { AddedAlertComponent } from './components/added-alert/added-alert.component';
import { FilterCommandeComponent } from './components/filter-commande/filter-commande.component';
import { OrderProductItemComponent } from './components/order-product-item/order-product-item.component';
import { OrderDetailProductItemComponent } from './components/order-detail-product-item/order-detail-product-item.component';
import { LocalisationMapComponent } from './components/localisation-map/localisation-map.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SearchInputComponent,
    ExtensibleButtonComponent,
    SlideComponent,
    NewsButtonItemComponent,
    SmallNewsButtonItemComponent,
    ProductCardItemComponent,
    AddPlusBtnComponent,
    FooterBannerComponent,
    ErrorMessageComponent,
    ChipBtnComponent,
    DjetBannerComponent,
    SimpleArticleCardItemComponent,
    LoaderComponent,
    PaginationComponent,
    CategorieProduitNavItemComponent,
    GarantieItemComponent,
    ImagesVisualisationComponent,
    InfoDetailArticleComponent,
    KeyValueItemComponent,
    AddedAlertComponent,
    FilterCommandeComponent,
    OrderProductItemComponent,
    OrderDetailProductItemComponent,
    LocalisationMapComponent,
    LocalisationComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    SearchInputComponent,
    ExtensibleButtonComponent,
    SlideComponent,
    NewsButtonItemComponent,
    SmallNewsButtonItemComponent,
    ProductCardItemComponent,
    AddPlusBtnComponent,
    FooterBannerComponent,
    ErrorMessageComponent,
    ChipBtnComponent,
    DjetBannerComponent,
    SimpleArticleCardItemComponent,
    LoaderComponent,
    PaginationComponent,
    CategorieProduitNavItemComponent,
    GarantieItemComponent,
    ImagesVisualisationComponent,
    InfoDetailArticleComponent,
    KeyValueItemComponent,
    AddedAlertComponent,
    FilterCommandeComponent,
    OrderProductItemComponent,
    OrderDetailProductItemComponent
  ]
})
export class SharedModule { }
