import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {}

  saveUser(): void {
    window.sessionStorage.setItem('activeUser', 'admin');
  }

  removeUser(): void {
    window.sessionStorage.removeItem('activeUser');
  }

  getUser() {
    return window.sessionStorage.getItem('activeUser');
  }
}
