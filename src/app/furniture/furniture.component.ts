import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit{
  
  filteredItems: any[] = [];
  ngOnInit(): void {
    this.filteredItems = items.filter((item)=>{return item.category === 'furniture'});
  }

}
