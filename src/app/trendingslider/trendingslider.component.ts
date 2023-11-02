import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TrendingitemComponent } from '../trendingitem/trendingitem.component';

@Component({
  selector: 'app-trendingslider',
  templateUrl: './trendingslider.component.html',
  styleUrls: ['./trendingslider.component.css'],
})
export class TrendingsliderComponent {

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
  