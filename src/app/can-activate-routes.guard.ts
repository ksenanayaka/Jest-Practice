import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateRoutesGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isSignedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
