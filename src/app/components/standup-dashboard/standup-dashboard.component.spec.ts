import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupDashboardComponent } from './standup-dashboard.component';

describe('StandupDashboardComponent', () => {
  let component: StandupDashboardComponent;
  let fixture: ComponentFixture<StandupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandupDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
