import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIconComponent } from './add-icon.component';

describe('AddIconComponent', () => {
  let component: AddIconComponent;
  let fixture: ComponentFixture<AddIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIconComponent],
    });
    fixture = TestBed.createComponent(AddIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
