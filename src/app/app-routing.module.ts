import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllComponent } from './all/all.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LampsComponent } from './lamps/lamps.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ChairsComponent } from './chairs/chairs.component';
import { SkincareComponent } from './skincare/skincare.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path:'categories',
    component: CategoriesComponent,
    children: [
      {path: 'all', component: AllComponent},
      {path: 'furnitures', component: FurnitureComponent},
      {path: 'electronics', component: ElectronicsComponent},
      {path: 'lamps', component: LampsComponent},
      {path: 'kitchen', component: KitchenComponent},
      {path: 'chairs', component: ChairsComponent},
      {path: 'skincare', component: SkincareComponent},
    ]
  },
  {path: 'categories/product/:id',component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
