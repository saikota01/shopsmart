import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoproductComponent } from './recoproduct.component';

describe('RecoproductComponent', () => {
  let component: RecoproductComponent;
  let fixture: ComponentFixture<RecoproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoproductComponent]
    });
    fixture = TestBed.createComponent(RecoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
