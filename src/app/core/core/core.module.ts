import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FixedHeadBarComponent } from './fixed-head-bar/fixed-head-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { NavComponent } from './nav/nav.component';
import { CoreRoutingModule } from './core.rounting.module';
import { MainNewsComponent } from './main-news/main-news.component';
import { SubMainNewsComponent } from './sub-main-news/sub-main-news.component';
import { WeekProductComponent } from './week-product/week-product.component';
import { LookedProductsComponent } from './looked-products/looked-products.component';
import { LikedProductsComponent } from './liked-products/liked-products.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateIdentifiantComponent } from './update-identifiant/update-identifiant.component';



@NgModule({
  declarations: [
    MainComponent,
    FixedHeadBarComponent,
    FooterComponent,
    ShopHomeComponent,
    NavComponent,
    MainNewsComponent,
    SubMainNewsComponent,
    WeekProductComponent,
    LookedProductsComponent,
    LikedProductsComponent,
    MainHeaderComponent,
    UserSpaceComponent,
    UpdateProfileComponent,
    UpdateIdentifiantComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CoreModule { }
