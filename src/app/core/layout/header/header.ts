import { Component } from '@angular/core';
import { NavElement } from './components/nav-element';

@Component({
  selector: 'app-header',
  imports: [NavElement],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
