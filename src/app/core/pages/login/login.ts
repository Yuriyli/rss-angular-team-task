import { Component, inject } from '@angular/core';
import { LoginForm } from '@features/login-form/login-form';
import { AuthService } from '@core/services/auth/auth-service';
import { Router } from '@angular/router';
import { LoginRequest } from '@core/services/auth/auth-service.interfaces';

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

  protected onSubmit(input: LoginRequest): void {
    this.auth.login({ email: input.email, password: input.password }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: unknown) => {
        console.error(error);
      },
    });
  }
}
