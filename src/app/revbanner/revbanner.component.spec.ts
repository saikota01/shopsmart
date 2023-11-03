import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevbannerComponent } from './revbanner.component';

describe('RevbannerComponent', () => {
  let component: RevbannerComponent;
  let fixture: ComponentFixture<RevbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevbannerComponent]
    });
    fixture = TestBed.createComponent(RevbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
