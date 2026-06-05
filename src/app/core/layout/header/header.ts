import { Component, inject } from '@angular/core';
import { NavElement } from './components/nav-element';
import { AuthService } from '@core/services/auth/auth-service';

@Component({
  selector: 'app-header',
  imports: [NavElement],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  protected readonly auth: AuthService = inject(AuthService);
}
