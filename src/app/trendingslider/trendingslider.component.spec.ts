import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsliderComponent } from './trendingslider.component';

describe('TrendingsliderComponent', () => {
  let component: TrendingsliderComponent;
  let fixture: ComponentFixture<TrendingsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingsliderComponent]
    });
    fixture = TestBed.createComponent(TrendingsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
