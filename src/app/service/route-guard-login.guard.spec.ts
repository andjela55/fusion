import { TestBed, async, inject } from '@angular/core/testing';

import { RouteGuardLoginGuard } from './route-guard-login.guard';

describe('RouteGuardLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuardLoginGuard]
    });
  });

  it('should ...', inject([RouteGuardLoginGuard], (guard: RouteGuardLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
