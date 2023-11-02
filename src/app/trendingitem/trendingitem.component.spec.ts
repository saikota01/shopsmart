import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingitemComponent } from './trendingitem.component';

describe('TrendingitemComponent', () => {
  let component: TrendingitemComponent;
  let fixture: ComponentFixture<TrendingitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingitemComponent]
    });
    fixture = TestBed.createComponent(TrendingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
