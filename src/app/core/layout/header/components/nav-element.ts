import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-element',
  imports: [RouterLink],
  template: '<a [routerLink]="route()" class="nav-element">{{text()}}</a>',
  styles: [
    `
      @use 'variables' as *;

      :host {
        display: flex;
        align-items: center;
      }

      .nav-element {
        display: flex;
        color: $primary-blue;
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0rem 0.3rem;
        padding: 0.1rem 0.7rem;
        text-decoration-line: none;
        border-radius: 0.4rem;
        transition:
          color $transition-base,
          background-color $transition-fast,
          transform $transition-fast;

        &:hover {
          transform: translate(1px, 1px);
          background-color: $alt-black;
        }
      }
    `,
  ],
})
export class NavElement {
  readonly text = input.required<string>();
  readonly route = input.required<string>();
}
