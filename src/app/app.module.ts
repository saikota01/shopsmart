import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { BannerComponent } from './banner/banner.component';
import { TrendingsliderComponent } from './trendingslider/trendingslider.component';
import { RecoproductComponent } from './recoproduct/recoproduct.component';
import { TrendingitemComponent } from './trendingitem/trendingitem.component';
import { RevbannerComponent } from './revbanner/revbanner.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllComponent } from './all/all.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LampsComponent } from './lamps/lamps.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ChairsComponent } from './chairs/chairs.component';
import { SkincareComponent } from './skincare/skincare.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RecommendedComponent,
    BannerComponent,
    TrendingsliderComponent,
    RecoproductComponent,
    TrendingitemComponent,
    RevbannerComponent,
    HomeComponent,
    NavbarComponent,
    CategoriesComponent,
    AllComponent,
    FurnitureComponent,
    ElectronicsComponent,
    LampsComponent,
    KitchenComponent,
    ChairsComponent,
    SkincareComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
