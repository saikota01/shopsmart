import { Component, OnInit } from '@angular/core';

let intervalId: any;
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
  } else {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Reset auto slide interval before potentially restarting it
  if (intervalId) {
    clearInterval(intervalId);
    this.startAutoSlide();
  }
}

startAutoSlide(): void {
  intervalId = setInterval(() => {
    this.changeSlide('next');
  }, 5000);
}
}
