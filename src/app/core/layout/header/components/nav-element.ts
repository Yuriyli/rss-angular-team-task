import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  template: '<a routerLink=`route()` class="nav-element">{{text()}}</a>',
  styles: [
    `
      @use 'variables' as *;

      .nav-element {
        display: block;
        color: $primary-blue;
        font-size: 1.2rem;
        padding: 0rem 1rem;
        text-decoration-line: none;

        &:hover {
          color: $default-button-hover-color;
        }
      }
    `,
  ],
})
export class Nav {
  readonly text = input.required<string>();
  readonly route = input.required<string>();
}
