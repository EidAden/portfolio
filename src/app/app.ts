import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing/landing-page/landing-page';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';
import { WhyMe } from './why-me/why-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Nav, Footer, WhyMe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('myApp');
}
