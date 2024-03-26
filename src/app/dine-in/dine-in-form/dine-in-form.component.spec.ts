import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineInFormComponent } from './dine-in-form.component';

describe('DineInFormComponent', () => {
  let component: DineInFormComponent;
  let fixture: ComponentFixture<DineInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DineInFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DineInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
