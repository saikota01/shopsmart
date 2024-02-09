import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
}
