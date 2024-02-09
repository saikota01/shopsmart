import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html'
})
export class SlideshowComponent implements OnInit {

  ngOnInit(): void {
    this.startAutoSlide();
  }

  currentIndex = 0;
  images = [
    '../../assets/img/slides/slide-1.jpg',
    '../../assets/img/slides/slide-2.jpg',
    '../../assets/img/slides/slide-3.jpg',
    '../../assets/img/slides/slide-4.jpg'
  ];

  changeSlide(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    } 
    else {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.changeSlide('next');
    }, 5000);
  }
}
