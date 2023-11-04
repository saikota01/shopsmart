import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit{

  filteredItems: any[] = [];
  ngOnInit(): void {
    this.filteredItems = items.filter((item)=>{return item.category === 'kitchen'});
  }
}
