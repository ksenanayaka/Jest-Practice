import { CanActivateRoutesGuard } from './can-activate-routes.guard';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CanActivateRoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CanActivateRoutesGuard]
    });
  });

  it('should create an instance', inject([CanActivateRoutesGuard], (guard: CanActivateRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
