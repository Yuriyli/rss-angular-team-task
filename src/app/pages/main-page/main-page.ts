import { Component } from '@angular/core';
import { MarketCard } from '@features/dashboard/components/market-card/market-card';

@Component({
  selector: 'app-main-page',
  imports: [MarketCard],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  standalone: true
})
export class MainPage {
  readonly pairs = [
    { symbol: 'BTCUSDT', price: 67420.5, change24h: 2.34, volume: 1_820_000_000 },
    { symbol: 'ETHUSDT', price: 3512.8, change24h: -1.12, volume: 940_000_000 },
    { symbol: 'BNBUSDT', price: 598.4, change24h: 0.87, volume: 320_000_000 },
    { symbol: 'SOLUSDT', price: 178.9, change24h: -3.45, volume: 580_000_000 },
    { symbol: 'XRPUSDT', price: 0.612, change24h: 5.21, volume: 210_000_000 },
  ];

  onCardClick(symbol: string): void {
    console.log('TODO?:По клику открываем страницу с графиком:', symbol);
  }
}
