import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css']
})
export class SkincareComponent implements OnInit{

  filteredItems: any[] = [];
  ngOnInit(): void {
    this.filteredItems = items.filter((item)=>{return item.category === 'skin-care'});
  }
}
