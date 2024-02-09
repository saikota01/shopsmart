import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html'
})
export class RecommendedComponent {
  filteredItems:any[] = []

  ngOnInit(): void {
    this.filteredItems = items.filter((item) => item.id <= 10);
  }

  addtocart(): void {
    alert('Item added to cart');
  }
}
