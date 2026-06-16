import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '@core/services/auth/auth-service.interfaces';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  standalone: true,
})
export class LoginForm {
  private readonly fb = inject(FormBuilder);

  title = input<string>('Sign In');
  submitLabel = input<string>('Login');
  errorMessage = input<string>('');
  isLoading = input<boolean>(false);

  submitted = output<LoginRequest>();

  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected onSubmit(): void {
    if (this.form.invalid || this.isLoading()) return;
    const { email, password } = this.form.getRawValue();
    this.submitted.emit({ email: email!, password: password! });
  }
}
