import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  AuthResponse,
  LoginRequest,
  RegistrationRequest,
  UserDetails,
} from '@core/services/auth/auth-service.interfaces';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly loggedIn: WritableSignal<boolean> = signal<boolean>(false);
  private readonly currentUser: WritableSignal<UserDetails | null> = signal<UserDetails | null>(
    null,
  );

  readonly isLoggedIn: Signal<boolean> = this.loggedIn.asReadonly();
  readonly user: Signal<UserDetails | null> = this.currentUser.asReadonly();

  private readonly backendUrl = environment.backendUrl;
  private readonly loginPath = '/auth/login';
  private readonly registrationPath = '/auth/registration';
  private readonly accessToken = 'access-token';

  constructor() {
    if (localStorage.getItem('access-token')) this.loggedIn.set(true);
  }

  login(input: LoginRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.backendUrl + this.loginPath, input).pipe(
      tap((response: AuthResponse) => {
        this.saveToken(response.token);
        this.loggedIn.set(true);
      }),
    );
  }

  register(input: RegistrationRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.backendUrl + this.registrationPath, input).pipe(
      tap((response: AuthResponse) => {
        this.saveToken(response.token);
        this.loggedIn.set(true);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(this.accessToken);
    this.loggedIn.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  private saveToken(token: string): void {
    localStorage.setItem('access-token', token);
  }
}
