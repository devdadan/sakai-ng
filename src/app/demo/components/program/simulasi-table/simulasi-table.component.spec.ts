import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulasiTableComponent } from './simulasi-table.component';

describe('SimulasiTableComponent', () => {
  let component: SimulasiTableComponent;
  let fixture: ComponentFixture<SimulasiTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulasiTableComponent]
    });
    fixture = TestBed.createComponent(SimulasiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
