import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private sessionService: SessionService, private router: Router) {}

  public isSignedIn() {
    return !!this.sessionService.getUser();
  }

  public authenticate(user: String, pass: String): void {
    if (user === 'admin' && pass === 'pass') {
      this.signIn();
    }
  }

  public signIn(): void {
    this.sessionService.saveUser();
    this.router.navigate(['/dashboard']);
  }

  public signOut(): void {
    this.sessionService.removeUser();
    this.router.navigate(['/home']);
  }
}
