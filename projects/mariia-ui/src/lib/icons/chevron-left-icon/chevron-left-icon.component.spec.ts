import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronLeftIconComponent } from './chevron-left-icon.component';

describe('ChevronLeftIconComponent', () => {
  let component: ChevronLeftIconComponent;
  let fixture: ComponentFixture<ChevronLeftIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChevronLeftIconComponent]
    });
    fixture = TestBed.createComponent(ChevronLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
