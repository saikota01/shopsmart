import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
}
