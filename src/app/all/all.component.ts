import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{
  items: any[] = [];
  ngOnInit(): void {
    this.items = items;
  }
}
