import { TestBed } from '@angular/core/testing';

import { ServiceActiveGuard } from './service-active.guard';

describe('ServiceActiveGuard', () => {
  let guard: ServiceActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServiceActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
