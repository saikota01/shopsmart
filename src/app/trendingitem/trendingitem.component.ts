import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-trendingitem',
  templateUrl: './trendingitem.component.html',
  styleUrls: ['./trendingitem.component.css']
})
export class TrendingitemComponent implements OnInit{
  trendingItems: any[] = []
  ngOnInit(): void {
    this.trendingItems = items.filter((item) => item.id > 8);
  }
}
