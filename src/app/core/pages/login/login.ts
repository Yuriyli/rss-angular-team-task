import { Component, inject } from '@angular/core';
import { LoginForm } from '@features/login-form/login-form';
import { AuthService } from '@core/services/AuthService';
import { Router } from '@angular/router';
import { LoginCredentials } from '@features/login-form/model/login-form.interfaces';

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

  protected onSubmit(credentials: LoginCredentials): void {
    const success: boolean = this.auth.login(credentials.username, credentials.password);
    if (success) this.router.navigate(['/']);
    else console.log('add error');
  }
}
