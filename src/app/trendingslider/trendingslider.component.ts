"use client"

import { Component } from '@angular/core';
import { items } from '../ProductDetails';

@Component({
  selector: 'app-trendingslider',
  templateUrl: './trendingslider.component.html',
  styleUrls: ['./trendingslider.component.css'],
})
export class TrendingsliderComponent {
  
  slideLeft = ()=> {
    console.log("Slide left");
  }

  slideRight = ()=> {
    console.log("Slide right");
  }
}
