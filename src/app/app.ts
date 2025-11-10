import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { MainContent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('myApp');
}
