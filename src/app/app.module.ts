import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { BannerComponent } from './banner/banner.component';
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
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AccordionComponent } from "./accordian.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [
        AppComponent,
        RecommendedComponent,
        BannerComponent,
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
        ProductSliderComponent,
        ProductItemComponent,
        SlideshowComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        AccordionComponent,
        MenuComponent
    ]
})
export class AppModule { }
