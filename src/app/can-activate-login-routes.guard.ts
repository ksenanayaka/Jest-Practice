import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateLoginRoutesGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isSignedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
