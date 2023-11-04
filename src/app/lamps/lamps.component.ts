import { Component, OnInit } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['./lamps.component.css']
})
export class LampsComponent implements OnInit{

  filteredItems: any[] = [];
  ngOnInit(): void {
    this.filteredItems = items.filter((item)=>{return item.category === 'lamp'});
  }
}
