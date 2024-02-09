import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {
  @ViewChild('childComponent', { read: ElementRef }) childComponent!: ElementRef;

  constructor(private renderer: Renderer2) {}

  slideLeft() {
    const slider = this.childComponent.nativeElement.querySelector("#slider");
    if(slider) {
      slider.scrollLeft -= 1150;
    }
  }

  slideRight() {
    const slider = this.childComponent.nativeElement.querySelector("#slider");
    if(slider) {
      slider.scrollLeft += 1150;
    }
  }
}
