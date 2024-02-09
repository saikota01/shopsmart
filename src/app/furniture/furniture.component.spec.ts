import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureComponent } from './furniture.component';

describe('FurnitureComponent', () => {
  let component: FurnitureComponent;
  let fixture: ComponentFixture<FurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureComponent]
    });
    fixture = TestBed.createComponent(FurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
