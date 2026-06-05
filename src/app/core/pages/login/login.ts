import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LoginForm } from '@features/login-form/login-form';
import { AuthService } from '@core/services/auth/auth-service';
import { Router } from '@angular/router';
import { LoginRequest } from '@core/services/auth/auth-service.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login {
  private readonly auth: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  protected isLoading = signal<boolean>(false);
  protected errorMessage = signal<string>('');

  protected onSubmit(input: LoginRequest): void {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.auth.login({ email: input.email, password: input.password })
      .pipe(takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false))).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          error.status === 401
            ? 'Invalid email or password'
            : 'Something went wrong. Try again later.'
        );
      }
    });
  }
}
