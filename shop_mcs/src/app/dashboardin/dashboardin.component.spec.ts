import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardinComponent } from './dashboardin.component';

describe('DashboardinComponent', () => {
  let component: DashboardinComponent;
  let fixture: ComponentFixture<DashboardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
