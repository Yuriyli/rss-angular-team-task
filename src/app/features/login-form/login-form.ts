import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '@core/services/auth/auth-service.interfaces';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  standalone: true
})
export class LoginForm {

  title = input<string>('Sign In');
  submitLabel = input<string>('Login');
  errorMessage = input<string>('');

  submitted = output<LoginRequest>();

  protected email = '';
  protected password = '';

  protected onSubmit(): void {
    if (!this.email || !this.password) return;

    this.submitted.emit({
      email: this.email,
      password: this.password
    });
  }
}
