import { TestBed, async, inject } from '@angular/core/testing';

import { LoginActiveGuard } from './login-active.guard';

describe('LoginActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginActiveGuard]
    });
  });

  it('should ...', inject([LoginActiveGuard], (guard: LoginActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
