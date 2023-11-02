import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-recoproduct',
  templateUrl: './recoproduct.component.html',
  styleUrls: ['./recoproduct.component.css']
})
export class RecoproductComponent implements OnInit{

  filteredItems:any[] = []

  ngOnInit(): void {
    this.filteredItems = items.filter((item) => item.id <= 8);
  }
}
