import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginCredentials } from '@features/login-form/model/login-form.interfaces';

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
  
  submitted = output<LoginCredentials>();

  protected username = '';
  protected password = '';

  protected onSubmit(): void {
    if (!this.username || !this.password) return;

    this.submitted.emit({
      username: this.username,
      password: this.password
    });
  }
}
