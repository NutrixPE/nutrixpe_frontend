import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoMpComponent } from './objetivo-mp.component';

describe('ObjetivoMpComponent', () => {
  let component: ObjetivoMpComponent;
  let fixture: ComponentFixture<ObjetivoMpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetivoMpComponent]
    });
    fixture = TestBed.createComponent(ObjetivoMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
