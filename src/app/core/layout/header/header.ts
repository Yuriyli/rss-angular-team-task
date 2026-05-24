import { Component } from '@angular/core';
import { Nav } from './components/nav-element';

@Component({
  selector: 'app-header',
  imports: [Nav],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
