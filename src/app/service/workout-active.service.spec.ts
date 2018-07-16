import { TestBed, inject } from '@angular/core/testing';

import { WorkoutActiveService } from './workout-active.service';

describe('WorkoutActiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutActiveService]
    });
  });

  it('should be created', inject([WorkoutActiveService], (service: WorkoutActiveService) => {
    expect(service).toBeTruthy();
  }));
});
