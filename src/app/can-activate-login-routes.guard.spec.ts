import { CanActivateLoginRoutesGuard } from './can-activate-login-routes.guard';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CanActivateLoginRoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CanActivateLoginRoutesGuard]
    });
  });

  it('should create an instance', inject([CanActivateLoginRoutesGuard], (guard: CanActivateLoginRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
