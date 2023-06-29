import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNutritionalPlanComponent } from './lista-nutritional-plan.component';

describe('ListaNutritionalPlanComponent', () => {
  let component: ListaNutritionalPlanComponent;
  let fixture: ComponentFixture<ListaNutritionalPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNutritionalPlanComponent]
    });
    fixture = TestBed.createComponent(ListaNutritionalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
