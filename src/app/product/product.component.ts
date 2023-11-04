import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  id: string = "";
  idNum: number = 0;
  item: any;
  image: string = '';
  quantity: number = 1;
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {this.id = params.get('id') || ''})
    this.item = items.find((product)=> {
      return product.id === parseInt(this.id);
    })
    this.image = this.item.img;
  }

  increment() {
    if(this.quantity >= 1) {
      this.quantity += 1;
    }
  }

  decrement() {
    if(this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  handleImage(img:string) {
    this.image = img;
  }
}
