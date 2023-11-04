import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit{

  filteredItems: any[] = [];
  ngOnInit(): void {
    this.filteredItems = items.filter((item)=>{return item.category === 'chair'});
  }
}
