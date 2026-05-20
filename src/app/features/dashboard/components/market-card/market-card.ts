import { Component, input, output, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-market-card',
  imports: [DecimalPipe],
  templateUrl: './market-card.html',
  styleUrl: './market-card.scss',
  standalone: true,
})
export class MarketCard {
  readonly symbol = input.required<string>();
  readonly price = input.required<number>();
  readonly change24h = input.required<number>();
  readonly volume = input<number>(0);

  readonly cardClick = output<string>();

  readonly isPositiveChange = computed(() => this.change24h() >= 0);

  onClick(): void {
    this.cardClick.emit(this.symbol());
  }
}
