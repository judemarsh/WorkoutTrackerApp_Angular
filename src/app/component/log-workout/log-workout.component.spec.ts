import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWorkoutComponent } from './log-workout.component';

describe('LogWorkoutComponent', () => {
  let component: LogWorkoutComponent;
  let fixture: ComponentFixture<LogWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
