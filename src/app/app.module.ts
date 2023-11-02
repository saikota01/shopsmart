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

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RecommendedComponent,
    BannerComponent,
    TrendingsliderComponent,
    RecoproductComponent,
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
