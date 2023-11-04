import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareComponent } from './skincare.component';

describe('SkincareComponent', () => {
  let component: SkincareComponent;
  let fixture: ComponentFixture<SkincareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkincareComponent]
    });
    fixture = TestBed.createComponent(SkincareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
