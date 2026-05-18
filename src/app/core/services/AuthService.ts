import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn: WritableSignal<boolean> = signal<boolean>(false);

  readonly isLoggedIn: Signal<boolean> = this.loggedIn.asReadonly();

  login(username: string, password: string): boolean {
    console.log('dummy login ' + username + ' password ' + password);
    this.loggedIn.set(true);
    return true;
  }

  logout(): void {
    this.loggedIn.set(false);
  }
}
